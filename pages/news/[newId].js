import { useRouter } from 'next/router';

export default function DetailsPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    // send a request to the backend API
    // to fetch the news item with newsId
    return <h1>This is the details page !!</h1> 
}

// Now this page will be available for out-domain/news/somethingImportant