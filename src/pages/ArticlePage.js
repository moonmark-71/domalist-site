function ArticlePage() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-4">📝 초보 셀러를 위한 도매 플랫폼 선택 팁</h1>
        
        <p className="mb-4">
          스마트스토어를 시작했는데 도매처를 어디서 찾아야 할지 막막하셨죠? 아래 기준들을 참고하면 훨씬 수월해집니다.
        </p>
  
        <ul className="list-disc pl-6 mb-6 text-gray-800">
          <li><strong>위탁 가능 여부:</strong> 재고 없이 운영하려면 반드시 체크!</li>
          <li><strong>상품 이미지 제공 여부:</strong> 상세페이지 구성에 매우 중요합니다.</li>
          <li><strong>정산 주기:</strong> 정산이 빠른 곳일수록 현금 흐름이 좋아집니다.</li>
          <li><strong>사입가 vs 소비자 가격:</strong> 마진 확보가 가능한지 반드시 확인!</li>
          <li><strong>고객 대응:</strong> 제품 불량이나 반품 대응이 원활한지 확인하세요.</li>
        </ul>
  
        <p>
          도매리스트 플랫폼에서는 위 기준에 맞는 다양한 도매처들을 직접 비교하고,  
          직접 테스트해본 후기도 제공할 예정입니다.  
          <span className="text-blue-500 font-semibold">[도매리스트 바로가기]</span>
        </p>
      </div>
    );
  }
  
  export default ArticlePage;
  
  