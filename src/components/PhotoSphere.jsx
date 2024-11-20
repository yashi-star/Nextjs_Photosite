import React, { useEffect, useRef } from 'react';

const PhotoSphere = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const images = [
      '/images/a1.jpg',
      '/images/a2.jpg',
      '/images/a3.jpg',
      '/images/a4.jpg',
      '/images/a5.jpg',
      '/images/a6.jpg',
      '/images/a7.jpg',
      '/images/a8.jpg',
      '/images/a9.jpg',
      '/images/a10.jpg',
      '/images/a11.jpg',
      '/images/a12.jpg',
      '/images/a13.jpg',
      '/images/a14.jpg',
      '/images/a15.jpg',
    ];

    const radius = 200; // Radius of the spherical layout
    const imageGroup = globeRef.current;

    // Load images and arrange them on a spherical layout
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;

      // Apply Tailwind classes programmatically
      img.classList.add(
        'w-24', // width: 100px (24rem in Tailwind)
        'h-24', // height: 100px
        'absolute', // absolute positioning
        'rounded-lg', // border-radius: 5%
        'drop-shadow-lg', // large shadow
        'backdrop-blur-sm', // blur behind the element
        'opacity-60', // slightly reduce opacity for whitish look
        'hover:opacity-90', // hover effect for higher opacity
        'transition-opacity', // smooth transition for opacity change
        'duration-300' // 300ms transition duration
      );

      // Calculate spherical coordinates (latitude and longitude)
      const phi = Math.acos(-1 + (2 * index) / images.length); // Latitude
      let theta = Math.sqrt(images.length * Math.PI) * phi; // Longitude

      // Add a small offset to the first image
      if (index === 0) {
        theta += 0.01;
      }

      // Convert spherical to Cartesian coordinates
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      // Set the image position
      img.style.left = `${x + 100}px`;
      img.style.top = `${y + window.innerHeight / 2}px`;

      // Add the image to the group
      imageGroup.appendChild(img);
    });

    // Animate the globe with rotation
    let angle = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      angle += 0.01;
      images.forEach((src, index) => {
        const img = imageGroup.children[index];
        const phi = Math.acos(-1 + (2 * index) / images.length); // Latitude
        let theta = Math.sqrt(images.length * Math.PI) * phi; // Longitude
        if (index === 0) {
          theta += 0.01; // Add a small offset to the first image
        }

        // Rotate the sphere
        const x = radius * Math.sin(phi) * Math.cos(theta + angle);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta + angle);

        // Update the image position
        img.style.left = `${x + 100}px`;
        img.style.top = `${y + window.innerHeight / 2}px`;
      });
    };

    animate();

    // Clean up when the component unmounts
    return () => {
      imageGroup.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={globeRef}
      style={{
        left: '30%',
        bottom: '10%',
        position: 'relative',
        transform: 'scale(1.2)',
        transformStyle: 'preserve-3d',
      }}
      className="flex-none w-1/3 p-4 flex justify-center items-center relative"
    />
  );
};

export default PhotoSphere;
