import Image from "next/image";
import QuizApp from "./screen/QuizApp";
import Result from "./screen/Result";

export default function Home() {
    console.log("HOME");

    return (
        <>
            <QuizApp />

            <Result/>

            {/* <div className="w-11/12 h-[90vh] mx-auto my-5 p-5 select-none bg-teal-500 rounded-3xl">
			<div className="flex justify-between items-center">
				<div className="px-4 py-2 font-semibold bg-gray-100 text-stone-900 rounded-2xl">
					JS Level 1
				</div>
				<div className="w-[70%] p-1 mx-auto bg-teal-900 rounded-3xl overflow-hidden">
					<div className="w-[20%] p-3 rounded-3xl bg-slate-200" id="counter-line"></div>
				</div>
				<div className="px-4 py-2 flex font-semibold bg-gray-100 text-stone-900 rounded-2xl">
					<div className="" id="minutes">00</div>
					<span>:</span>
					<div className="seconds-box" id="seconds">00</div>
				</div>
			</div>

			<div className="w-3/4 mx-auto my-10">
				<div className="flex flex-col p-3 w-full break-words text-center bg-gray-200 text-gray-950 rounded-lg tracking-widest">
					<div className="flex">1/10</div>
					<div className="text-2xl font-semibold">What is HMTL CSS AND JAVASCRIpt</div>
				</div>

				<div className="w-full flex flex-col gap-5 mt-5 p-8">
					<div className="max-w-max p-3 flex items-center gap-4 break-words bg-orange-100 text-stone-900 rounded-3xl">
						<span className="px-3 py-2 text-center rounded-full bg-red-500">A</span>
						<span className="text-xl">HMTL</span>
					</div>

					<div className="max-w-max flex items-center break-words bg-orange-100 text-stone-900 rounded-3xl">
						<span className="circle">B</span>
						<span>CSS</span>
					</div>

					<div className="max-w-max flex items-center break-words bg-orange-100 text-stone-900 rounded-3xl">
						<span className="circle">C</span>
						<span>JavaScript</span>
					</div>

					<div className="max-w-max flex items-center break-words bg-orange-100 text-stone-900 rounded-3xl">
						<span className="circle">D</span>
						<span >React JS</span>
					</div>
				</div>
			</div>
		</div> */}

        </>
    );
}
