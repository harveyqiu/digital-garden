export default function MarkCard({mark}) {
    return (
        <>
                <div className="my-2 border-gray border-2 rounded-lg p-2">
                        <div className="p-3 text-2xl line-clamp-3 text-gray-1000 dark:text-gray-100">
                                    {mark.title}
                        </div>
                        <div className="p-3">
                                    {mark.link}
                        </div>
                </div>
        </>
    )
}