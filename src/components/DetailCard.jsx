import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import Loading from "./Loading";

function DetailCard() {
  const { loading, result, isError } = useSelector(state => state?.ipReducer || {});
  return (
    <div className="bg-white xl:h-[160px] h-[310px] w-[340px] xl:w-[1100px] p-5 xl:p-0 flex flex-col xl:flex-row gap-5 xl:gap-0 place-items-center border-b-2 rounded-2xl xl:-mb-[110px] -mb-[250px] z-[99999] relative">
      {isError ? (
        <div className="w-full text-center font-extraBold text-2xl">Something went wrong, Please try disabling ad blocker if active.</div>
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Card title="IP Address" body={result?.ip} className="xl:border-r-2 xl:text-start text-center" />
              <Card title="Location" body={result?.location ? ` ${result?.location?.postalCode} ${result?.location?.city}, ${result?.location?.region}, ${result?.location?.country}` : '--'} className="xl:border-r-2 xl:text-start text-center" />
              <Card title="Time Zone" body={result?.location?.timezone} className="xl:border-r-2 xl:text-start text-center" />
              <Card title="ISP" body={result?.isp} className="xl:text-start text-center" />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default DetailCard;
