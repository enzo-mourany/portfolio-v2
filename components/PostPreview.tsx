import Link from "next/link";

import { PostMetadata } from "./PostMetadata";

const postPreview = (props: PostMetadata) => {
    return (
        <div key={props.slug}>
        <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
        </Link>
        </div>
        )
    };
    
export default postPreview;