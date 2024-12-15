import { Dialogs } from '@nativescript/core';

export const showServiceAlert = (title: string) => {
  return Dialogs.alert({
    title,
    message: "Coming soon!",
    okButtonText: "OK"
  });
};

export const showError = (message: string) => {
  return Dialogs.alert({
    title: "Error",
    message,
    okButtonText: "OK"
  });
};