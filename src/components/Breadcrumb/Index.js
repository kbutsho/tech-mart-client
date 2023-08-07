import Link from 'next/link';
import { useRouter } from 'next/router';
import { FcHome } from 'react-icons/fc';

const Breadcrumb = () => {
    const router = useRouter();
    const { asPath } = router;
    const segments = asPath.split('/').filter(Boolean);

    const style = {
        width: "100%",
        height: "12vh",
        "borderRadius": "8px",
        background: "#F3F3F3",
        display: "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "textDecoration": "none",
        "fontSize": "1.1rem",
        "fontWeight": "bold",
        "boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    }

    return (
        <div className="breadcrumbs" style={style}>
            <div>
                <Link href="/">
                    <FcHome size="24" style={{ marginBottom: "5px" }} />
                </Link>
                {segments.map((segment, index) => {
                    const isLastSegment = index === segments.length - 1;
                    return (
                        <span key={segment}>
                            {!isLastSegment ? (
                                <span>
                                    {' / '}
                                    <Link className='text-decoration-none'
                                        href={`/${segments.slice(0, index + 1).join('/')}`}>
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
