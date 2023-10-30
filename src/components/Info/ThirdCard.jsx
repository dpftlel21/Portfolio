const ThirdCard = () => {
  return (
    <div className="w-full flex flex-col text-sm">
      <h1 className="my-2 text-base">📝 기록의 중요성을 아는 사람 !</h1>
      <div className="ml-2">
        <p>1. 프로젝트를 진행하면서 일어난 트러블 슈팅에 대해 기록 및 정리</p>
        <p>2. 개발 공부를 하면서 알게 된 지식, 고민, Trend 등을 블로깅</p>
      </div>

      <h2 className="my-2 text-base">⭐ 성과</h2>
      <div className="ml-2">
        <p>
          1. 프로젝트를 진행하면서, 같은 오류가 재발생 했을 때 기록해둔 자료를
          통해 금방 해결
        </p>
        <p>
          2. 새로 알게 된 지식, 언어를 프로젝트에 적용함으로써 완성도를 높임
        </p>
      </div>
    </div>
  );
};

export default ThirdCard;
