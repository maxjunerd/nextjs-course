const fetchPost = async (postId: string) => {
  const post = await fetch(
    `http://nextjs-course-ie9bjetpf-chayannon-tonsais-projects.vercel.app/api/posts/${postId}`,
    {
      method: "GET",
    }
  );

  console.log(post.json);

  return post.json();
};

export async function generateMetadata({ params }: any) {
  const { post } = await fetchPost(params.id);
  // console.log(post);

  // return {
  //   title: post[0].title,
  //   description: post[0].description,
  // };
}

export default function PostId({ params }: any) {
  return <div>Post ID{params.id}</div>;
}
