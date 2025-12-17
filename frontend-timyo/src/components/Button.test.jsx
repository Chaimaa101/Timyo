import React from 'react'

import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Button from "./button";
import { MemoryRouter } from "react-router-dom";

test("calls onClick when button is clicked", () => {
  const handleClick = vi.fn();

  render(
    <MemoryRouter>
      <Button name="Click Me" color="lime" onClick={handleClick} />
    </MemoryRouter>
  );

  const button = screen.getByText("Click Me");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1); 
});
