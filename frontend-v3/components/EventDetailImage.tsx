'use client';

interface EventDetailImageProps {
  image: string;
  title: string;
}

export default function EventDetailImage({ image, title }: EventDetailImageProps) {
  return (
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover rounded-lg mb-4"
    />
  );
}