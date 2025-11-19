import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogAPI } from '../services/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Tecnología', 'Desarrollo', 'Diseño', 'Negocios', 'IA'];
  const postsPerPage = 9;

  useEffect(() => {
    loadPosts();
  }, [currentPage, selectedCategory]);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const params = {
        page: currentPage,
        limit: postsPerPage
      };

      if (selectedCategory !== 'all') {
        params.category = selectedCategory;
      }

      const response = await blogAPI.getAll(params);
      setPosts(response.data.data);
      setTotalPages(response.data.totalPages);
      setTotal(response.data.total);
      setLoading(false);

      // Scroll to top al cambiar de página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error cargando posts:', error);
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset a primera página
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Botón anterior
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          ← Anterior
        </button>
      );
    }

    // Primera página
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="dots1" className="px-2">...</span>);
      }
    }

    // Páginas visibles
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 border rounded-lg transition ${
            currentPage === i
              ? 'bg-primary text-white border-primary'
              : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }

    // Última página
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="dots2" className="px-2">...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          {totalPages}
        </button>
      );
    }

    // Botón siguiente
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          Siguiente →
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-200">
            Artículos, tutoriales y noticias sobre tecnología
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contador de resultados */}
{/* Contador de resultados - más sutil */}
{selectedCategory !== 'all' && (
  <div className="mb-8 text-center">
    <span className="inline-block px-4 py-2 bg-primary bg-opacity-10 text-primary rounded-full text-sm font-semibold">
      Categoría: {selectedCategory} ({total} {total === 1 ? 'artículo' : 'artículos'})
    </span>
  </div>
)}
          {loading ? (
            <div className="text-center text-gray-500">Cargando artículos...</div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post) => (
                  <div
                    key={post._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                  >
                    {/* Imagen */}
                    <div className="h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center overflow-hidden">
                      {post.featuredImage ? (
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-6xl">📝</span>
                      )}
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-accent uppercase">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>

                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-bold text-secondary mb-2 hover:text-primary transition cursor-pointer">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Por {post.author?.name || 'Admin Indavco'}
                        </span>
                        <span className="text-sm text-gray-400">
                          👁️ {post.views} vistas
                        </span>
                      </div>

                      {post.tags && post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 flex-wrap">
                  {renderPagination()}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No hay artículos disponibles en esta categoría.
              </p>
              <button
                onClick={() => handleCategoryChange('all')}
                className="text-primary hover:text-accent font-semibold"
              >
                Ver todos los artículos
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;