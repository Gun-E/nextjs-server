import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className="pt-12">
            <div className="p-7 flex items-center justify-between">
                <Image
                    src="/images/logo_main_white.png"
                    alt="logo"
                    style={{objectFit: 'cover'}}
                    width={93}
                    height={24}
                />
                <Link href="/modify">
                    <Image
                        src="/images/icon_24px_edit.png"
                        alt="settings icon"
                        style={{objectFit: 'cover'}}
                        width={24}
                        height={24}
                    />
                </Link>

            </div>
        </div>

    );
}