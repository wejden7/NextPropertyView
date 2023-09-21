// Breadcrumbs.js
import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = useRouter();
  const { asPath } = router;

  const segments = asPath.split("/").filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => ({
    text: segment,
    href: `/${segments.slice(0, index + 1).join("/")}`,
  }));
  

  return (
    <nav className="py-2 my-2 px-2 text-xs text-primary-100 bg-white">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.href}>
          {index > 0 && " / "}
          <Link href={breadcrumb.href}>
            {breadcrumb.text}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
