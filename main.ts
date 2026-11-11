export function merge( collection_1: number[], collection_2: number[], collection_3: number[]): number[] {

    const result: number[] = [];

    let collection_3_size: number = collection_3.length;

    let i: number = 0
    let j: number = 0
    let k: number = collection_3_size - 1

    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        if (i < collection_1.length && (j >= collection_2.length || collection_1[i] <= collection_2[j]) && (k < 0 || collection_1[i] <= collection_3[k])) {
            result.push(collection_1[i]);
            i++;
        }
        else if (j < collection_2.length && (i >= collection_1.length || collection_2[j] <= collection_1[i]) && (k < 0 || collection_2[j] <= collection_3[k])) {
            result.push(collection_2[j]);
            j++;
        }   
        else if (k >= 0 && (i >= collection_1.length || collection_3[k] <= collection_1[i]) && (j >= collection_2.length || collection_3[k] <= collection_2[j])){
            result.push(collection_3[k]);
            k--;
        }   
    }

    return result;
}
