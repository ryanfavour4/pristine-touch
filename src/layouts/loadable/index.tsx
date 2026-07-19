import { Suspense } from "react";
import { LoadingScreen } from "../loading";

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );

export default Loadable;
