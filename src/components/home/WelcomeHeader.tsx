import * as React from "react";

type Props = {
  username?: string;
};

export function WelcomeHeader({ username }: Props) {
  return (
    <>
      <label className="text-2xl font-bold mb-4">
        Welcome{username ? `, ${username}` : ' to ServicePro'}
      </label>
      <label className="text-lg mb-4">
        Find trusted professionals for your needs
      </label>
    </>
  );
}