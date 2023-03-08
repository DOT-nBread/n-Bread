import { renderStatic } from "@/domains/shared/utils/renderer";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import * as React from "react";
export default class AppDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const page = await ctx.renderPage();
		const { css, ids } = await renderStatic(page.html);
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: (
				<React.Fragment>
					{initialProps.styles}
					<style data-emotion={`css ${ids.join(" ")}`} dangerouslySetInnerHTML={{ __html: css }} />
				</React.Fragment>
			),
		};
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
// 	return (
// 		<Html lang="en">
// 			<Head />
// 			<body>
// 				<Main />
// 				<NextScript />
// 			</body>
// 		</Html>
// 	);
// }
