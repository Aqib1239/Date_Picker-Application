import Image from "next/image";
import DatePickerComponent from "@/components/DatePickerComponent";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <DatePickerComponent />
      </main>
     
    </div>
  );
}
