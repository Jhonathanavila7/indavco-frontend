import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogAPI } from '../services/api';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    try {
      const response = await blogAPI.getOne(slug);
      setPost(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error cargando post:', error);
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">Cargando artículo...</div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-secondary mb-4">Artículo no encontrado</h1>
            <Link to="/blog" className="text-primary hover:text-accent">
              ← Volver al blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-accent to-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="text-white hover:text-gray-200 mb-4 inline-block">
            ← Volver al blog
          </Link>
          
          <div className="mb-4">
            <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-gray-200">
            <span>Por {post.author?.name || 'Indavco Systems'}</span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>👁️ {post.views} vistas</span>
          </div>
        </div>
      </div>

      {/* Imagen destacada */}
        {post.featuredImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
             <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-96 object-cover"
             />
         </div>
        </div>
        )}

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
          {/* Extracto */}
          <div className="text-xl text-gray-600 italic mb-8 pb-8 border-b">
            {post.excerpt}
          </div>

          {/* Contenido principal */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">Etiquetas:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Volver al blog */}
        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-block bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Ver más artículos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;