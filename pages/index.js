// export default function Home() {
//     return <h1>Hello, Static Site Generation!</h1>;
// }
import { getPostData } from '../lib/posts';

export default function Home({ data, content }) {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.date}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}

export async function getStaticProps() {
    const { data, content } = getPostData();
    return {
        props: {
            data,
            content
        }
    };
}

