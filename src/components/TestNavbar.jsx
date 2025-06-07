import { Anchor } from "antd";
import { BackButton } from "./commons/buttons/Back";

export function TestNavBar() {
    return (
        <>

            <BackButton />
            <Anchor
                affix={false}
                items={[
                    {
                        key: '1',
                        title: 'Basic demo',
                        href: '/'
                    },
                    {
                        key: '2',
                        href: '#anchor-demo-static',
                        title: 'Static demo',
                    },
                    {
                        key: '3',
                        href: '#api',
                        title: 'API',
                        children: [
                            {
                                key: '4',
                                href: '#anchor-props',
                                title: 'Anchor Props',
                            },
                            {
                                key: '5',
                                href: '#link-props',
                                title: 'Link Props',
                            },
                        ],
                    },
                ]}
            />

        </>
    )
}