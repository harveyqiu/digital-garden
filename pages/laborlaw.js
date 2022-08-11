import Layout from "../components/Layout";
import { useState } from "react";


export default function LaborLaw() {
    const [cancelParty, setCancelParty] = useState("")

    return (
      <Layout>
        <div>
          <h1>劳动法</h1>
          <h2>
              简明劳动法
          </h2>
        </div>
        <div>
            <div>
                1. 解除
            </div>
            <div className="flex flex-row ">
                <div className="mx-auto basis-1/3 text-center">
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => {
                        setCancelParty("协商解除")
                    }}>
                        协商解除
                    </button>
                </div>
                <div className="mx-auto basis-1/3 text-center">
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  onClick={() => {
                        setCancelParty("劳动者单方解除")
                    }}>
                    劳动者单方解除
                    </button>
                </div>
                <div className="mx-auto basis-1/3 text-center">
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  onClick={() => {
                        setCancelParty("用人单位单方解除")
                    }}>
                    用人单位单方解除
                    </button>
                </div>
            </div>
            <div>
                {cancelParty}
            </div>

        </div>
      </Layout>
    );
}