import React from 'react'

type PostProps = {
    post: any[]
}

const Post = ({ post }: PostProps) => {
    return (
        <>
            <h2 className="text-2xl uppercase text-center">Kết nối nhà vườn và Hành trình Organic</h2>
            <div className='grid grid-cols-4 gap-8 mt-10'>
                {post?.map((post, index) => {
                    return (
                        <div key={index}>
                            <div className="border w-[290px] h-[160px] overflow-hidden">
                                <a href="/#/news/${post.id}"><img src={`${post.img}`} alt="" /></a>
                            </div>
                            <h3 className="text-center hover:text-lime-400 py-4"><a href="/#/news/${post.id}" className="text-xl ">{post.name}</a></h3>
                            <a className="text-center hover:text-lime-400" href="/#/news/${post.id}">{post.desc}</a>
                        </div>
                    )
                })}
            </div>

            <div className='pt-5'>
                <div>
                    <h1 className="text-3xl capitalize text-center my-10 normal">Cam kết của chúng tôi</h1>
                    <div className="grid grid-cols-5 gap-8 mb-10">
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_4.jpg" alt="" />
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_3.jpg" alt="" />
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_2.jpg" alt="" />
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_1.jpg" alt="" />
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_4-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post