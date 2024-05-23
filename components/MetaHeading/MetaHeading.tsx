import { FC } from "react";

interface HeadProps {
    title: string;
    description: string;
    keywords: string;
}

const MetaHeading: FC<HeadProps> = ({ title, description, keywords }) => {
    return (
        <>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
        </>
    )
}

export default MetaHeading;