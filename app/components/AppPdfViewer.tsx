import {
  RPProvider,
  RPLayout,
  RPPages,
  RPConfig,
  type RPProviderProps,
  type RPLayoutProps,
} from "@react-pdf-kit/viewer";

interface Props {
  showToolbar?: boolean;
  pdfSrc: string;
  providerProps?: RPProviderProps;
  defaultLayoutProps?: RPLayoutProps;
}

const AppPdfViewer = (props: Props) => {
  const { showToolbar = true, defaultLayoutProps, pdfSrc } = props;
  return (
    <RPConfig licenseKey="YOUR_LICENSE_KEY">
      <RPProvider src={pdfSrc}>
        {showToolbar ? (
          <RPLayout toolbar {...defaultLayoutProps}>
            <RPPages />
          </RPLayout>
        ) : (
          <div style={{ width: "100%", height: "550px" }}>
            <RPPages />
          </div>
        )}
      </RPProvider>
    </RPConfig>
  );
};

export default AppPdfViewer;
