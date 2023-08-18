import Spinner from "./components/Spinner";

export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-24px-96px)] flex-col items-center justify-center">
      <Spinner />
      <p className="mt-4 text-gray-600">Загрузка...</p>
    </div>
  );
}
