import Link from "next/link";

import '../styles/globals.css';

import type { PostMetadata } from "./PostMetadata";

const postPreview = (props: PostMetadata) => {
    return (
        <div key={props.slug}>
        <Link href={`api/posts/${props.slug}`}>
        <h2>{props.title}</h2>
        </Link>
        </div>
        )
    };
    
export default postPreview;