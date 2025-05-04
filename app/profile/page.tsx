import Avatar from "@/components/ui/Avatar";
import { OrderIcon } from "@/components/icons";

function UserProfile() {
  return (
    <div className="flex gap-x-12 w-full p-10">
      <div className="flex flex-col h-max gap-y-6 border border-[var(--color-border-secondary)] rounded-md p-6 w-[320px] bg-[var(--color-tile)]">
        <div className="flex gap-x-6 items-center">
          <Avatar />
          <div className="flex flex-col gap-y-1">
            <span className="textM font-medium">Username</span>
            <span className="textS text-[var(--textColor-secondary)]">UserEmail</span>
          </div>
        </div>
        <hr className="text-[var(--color-border-secondary)]" />
        <button className="w-max">Logout</button>
      </div>
      <div className="flex flex-col gap-y-8 w-full">
        <button className="w-1/2 text-[var(--color-primary)] cursor-pointer">
          Transaction
          <hr />
        </button>
        <div>
          <div className="flex gap-x-4 p-4 w-full border border-[var(--color-border-secondary)] bg-[var(--color-tile)] rounded-md">
            <OrderIcon className="text-[var(--color-primary)]" />
            <div className="w-full flex flex-col gap-y-3.5">
              <span className="textM text-[var(--textColor-secondary)]">2022-09-24 18:31</span>
              <div>
                <span className="textL font-medium">Your order nr INV/208421205/TSR/3385-B54</span>
                <ul className="textL font-medium list-disc ml-6">
                  <li>Rexus Xierra X16</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
