import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Image3D({ image }) {
  const gltf = useLoader(
    GLTFLoader,
    `https://platformdev123.blob.core.windows.net/testing/${image}`
  );

  return (
    <>
      <primitive object={gltf.scene} scale={0.8} />
    </>
  );
}
