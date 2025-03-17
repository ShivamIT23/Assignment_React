
import { useNavigate } from "react-router-dom";

export default function Description() {
  const navigate = useNavigate();
  return (
    <section className="min-w-[96vw] min-h-[60vh] mt-20 h-fit w-full px-[10vw] block xl:px-[16vw] xl:flex">
      <div className="bg-gray-200 min-w-[65vw] h-2/3 max-w-[90vw] py-20">
        <h2 className="w-full text-center text-gray-800 font-semibold text-lg md:text-2xl xl:text-4xl">
          Why Communion is <span className="font-bold">Awesome!</span>
        </h2>
        <div className="xl:flex w-full mt-10 h-full px-[5vw]">
          <div className="w-full xl:w-1/3 flex flex-col">
            <p className=" text-gray-700 h-[34vh] md:h-auto overflow-auto font-bold xl:leading-9 text-left">
              Communion is not just another platform—it's a vibrant space that
              unites diverse faiths, beliefs, and traditions. By promoting
              collaboration and connection, we're fostering a world where
              differences become strengths and unity becomes the norm.
            </p>
            <button
              onClick={() => navigate("/events")}
              className="my-auto mt-2 xl:mt-8 md:px-6 py-2 w-full text-center xl:max-w-fit hover:shadow-xl rounded-full text-gray-800 font-semibold hover:text-white hover:bg-zinc-700 transition xl:flex items-end"
            >
              Explore Events <span className="text-xl">&rarr;</span>
            </button>
          </div>
          <div className="w-full xl:w-2/3 xl:flex">
            <div className="my-6 xl:m-6 w-full xl:w-2/3 rounded-2xl h-3/4 bg-black bg-opacity-85 shadow-xl flex flex-col items-start p-6">
              <img src="unify.png" alt="" className="" />
              <h4 className="text-xl text-start text-gray-50 font-semibold">Unifying Communities</h4>
              <p className=" my-auto text-start text-gray-300 font-medium">
                Communion bridges diverse religious communities, becoming the
                social
              </p>
            </div>
            <div className="my-6 xl:m-6 w-full xl:w-2/3 rounded-2xl h-3/4 bg-black bg-opacity-85 shadow-xl flex flex-col items-start p-6">
              <img src="inno.png" alt="" className="" />
              <h4 className="text-xl text-start text-gray-50 font-semibold">Innovative and Fun</h4>
              <p className=" my-auto text-start overflow-hidden text-gray-300 font-medium">
              Experience faith in a fresh way through our interactive features, engaging events, and modern approach to
              </p>
            </div>
            <div className="my-6 xl:m-6 w-full xl:w-2/3 rounded-2xl h-3/4 bg-black bg-opacity-85 shadow-xl flex flex-col items-start p-6">
              <img src="promo.png" alt="" className="" />
              <h4 className="text-xl text-start text-gray-50 font-semibold">Promoting Unity</h4>
              <p className=" my-auto text-start text-gray-300 font-medium">
              We foster understanding and harmony between different faith communities through
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
