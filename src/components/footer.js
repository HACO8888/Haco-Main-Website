export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-10 mb-10 text-center">
            Copyright © 2019-{currentYear} HACO. All rights reserved.
        </footer>
    );
}

