import { Icon, Link as ChackraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        // eslint-disable-next-line @next/next/link-passhref
        <Link href={href} passHref>
            <ChackraLink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChackraLink>
        </Link>
    );
}