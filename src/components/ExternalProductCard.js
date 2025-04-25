import React, { useEffect, useState } from "react";

function ExternalProductCard({ title, productUrl, imageUrl: initialImage, price }) {
  const [imgSrc, setImgSrc] = useState(initialImage || "/default-thumbnail.jpg");

  // og:image 자동 추출 (처음 로드될 때 한 번만)
  useEffect(() => {
    const fetchOgImage = async () => {
      if (!initialImage && productUrl) {
        try {
          const res = await fetch(
            `https://us-central1-domae-platform.cloudfunctions.net/getOgImage?url=${encodeURIComponent(productUrl)}`
          );
          const data = await res.json();
  
          // ✅ 이 줄이 핵심! 콘솔 확인용 로그
          console.log("🔥 [OG 이미지 URL]", data.imageUrl);
  
          if (data.imageUrl) {
            setImgSrc(data.imageUrl);
          }
        } catch (err) {
          console.error("썸네일 불러오기 실패:", err.message);
        }
      }
    };
  
    fetchOgImage();
  }, [productUrl, initialImage]);
  

  return (
    <a href={productUrl} target="_blank" rel="noopener noreferrer">
      <div className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition w-full">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover rounded mb-3"
          onError={(e) => {
            if (e.target.src !== "/default-thumbnail.jpg") {
              e.target.src = "/default-thumbnail.jpg";
            }
          }}
        />
        <div className="text-base font-semibold text-gray-900">{title}</div>
        {price && <div className="text-sm text-gray-600 mt-1">{price}</div>}
      </div>
    </a>
  );
}

export default ExternalProductCard;
