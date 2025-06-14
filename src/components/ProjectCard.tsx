"use client";
import React, { useState, useEffect } from 'react';

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  // Skip rendering if card is empty
  if (!images.length && !title && !description) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    if (index === currentImageIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        maxWidth: '600px',
        width: '100%',
        transform: 'translateY(0)',
        transition: 'transform 0.3s ease'
      }}>
        {/* Image Section */}
        <div style={{
          position: 'relative',
          height: '400px',
          background: '#f8f9fa',
          overflow: 'hidden'
        }}>
          {images.length > 0 && (
            <>
              <img
                src={images[currentImageIndex]}
                alt={title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  opacity: isAnimating ? 0.7 : 1,
                  transform: isAnimating ? 'scale(1.05)' : 'scale(1)'
                }}
              />

              {/* Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    style={{
                      position: 'absolute',
                      left: '15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '45px',
                      height: '45px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    ←
                  </button>

                  <button
                    onClick={handleNext}
                    style={{
                      position: 'absolute',
                      right: '15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '45px',
                      height: '45px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    →
                  </button>
                </>
              )}

              {/* Dots */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px'
              }}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: 'none',
                      background: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: index === currentImageIndex ? 'scale(1.2)' : 'scale(1)'
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div style={{
          padding: '32px',
          textAlign: 'center'
        }}>
          {/* Avatars */}
          {avatars?.length > 0 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px',
              gap: '-8px'
            }}>
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar.src}
                  alt="Avatar"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '3px solid white',
                    marginLeft: index > 0 ? '-8px' : '0',
                    zIndex: avatars.length - index
                  }}
                />
              ))}
            </div>
          )}

          {/* Title */}
          {title && (
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '16px',
              lineHeight: '1.3'
            }}>
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.6',
              margin: '0 auto 32px auto',
              maxWidth: '480px'
            }}>
              {description}
            </p>
          )}

          {/* Action Links */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {content && (
              <a
                href={href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  background: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
              >
                Read case study →
              </a>
            )}

            {link && (
              <a
                href={link}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  background: 'transparent',
                  color: '#007bff',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  border: '2px solid #007bff',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
              >
                View project ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
export default ProjectCard;
