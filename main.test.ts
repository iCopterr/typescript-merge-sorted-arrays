import { describe, it, expect } from "vitest";
import { merge } from "./main";

describe("merge function", () => {

    it("should merge three sorted arrays", () => {
        const result = merge(
            [1, 4, 7],
            [2, 5, 8],
            [9, 6, 3]
        );

        expect(result).toEqual(
            [1, 2, 3, 4, 5, 6, 7, 8, 9]
        );
    });


    it("should merge three sorted arrays", () => {
        const result = merge([1, 4], [2, 5], [6, 3]);

        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });


    it("should return empty array", () => {
        const result = merge([], [], []);

        expect(result).toEqual([]);
    });


    it("should preserve duplicate values", () => {
        const result = merge([1, 2], [2, 3], [4, 2]);

        expect(result).toEqual([1, 2, 2, 2, 3, 4]);
    });


    it("should handle negative numbers", () => {
        const result = merge([-5, 1], [-3, 2], [4, -1]);

        expect(result).toEqual([-5, -3, -1, 1, 2, 4]);
    });

    it("should handle merge only not empty array", () => {
        const result = merge([], [-3, 2], [4, -1]);

        expect(result).toEqual([-3,-1,2,4]);
    });
  
});