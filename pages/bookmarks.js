import Header from "../components/Header";
import MarkCard from "../components/Library/MarkCard";

export default function Bookmarks({ marks }) {
    return (
        <>
            <Header title="Harvey Qiu" />
            <div className="container mx-auto">
                <h1 className="text-left text-8xl my-5">Library</h1>
                <div className="flex flex-row">
                    {
                        marks.map((mark) => (
                            <MarkCard
                                key={mark.title}
                                mark={mark}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export function getStaticProps() {
    let marks = [
        {
            title: "hello",
            link: 'https://garden.harveyqiu.xyz',
            comment: 'good website'
        },
        {
            title: "hello1",
            link: 'https://garden.harveyqiu.xyz',
            comment: 'good website'
        },
        {
            title: "hello2",
            link: 'https://garden.harveyqiu.xyz',
            comment: 'good website'
        },
        {
            title: "hello3",
            link: 'https://garden.harveyqiu.xyz',
            comment: 'good website'
        },
    ]
    return {
         props: { 
            marks,
        } 
    };
}