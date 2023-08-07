import Link from 'next/link';
import { useRouter } from 'next/router';
import { FcHome } from 'react-icons/fc';

const Breadcrumb = () => {
    const router = useRouter();
    const { asPath } = router;
    const segments = asPath.split('/').filter(Boolean);

    return (
        <div className="breadcrumbs">
            <div className="alert alert-secondary">
                <Link href="/home">
                    <FcHome size="20" />
                </Link>
                {segments.map((segment, index) => {
                    const isLastSegment = index === segments.length - 1;
                    return (
                        <span key={segment}>
                            {!isLastSegment ? (
                                <span>
                                    {' / '}
                                    <Link href={`/${segments.slice(0, index + 1).join('/')}`}>
                                        {segment}
                                    </Link>
                                </span>
                            ) : (
                                ` / ${segment}`
                            )}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Breadcrumb;
