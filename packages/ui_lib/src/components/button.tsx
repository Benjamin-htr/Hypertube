import { ark } from "@ark-ui/react";
import { styled } from "@my-monorepo/styled-system/jsx";
import { button, type ButtonVariantProps } from "@my-monorepo/styled-system/recipes";
import type { ComponentPropsWithoutRef } from "react";

export type ButtonProps = ButtonVariantProps & ComponentPropsWithoutRef<typeof ark.button>;
export const Button = styled(ark.button, button);
