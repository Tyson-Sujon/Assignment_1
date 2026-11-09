// const formatCoordinate=(): readonly [number,number,string]=>{
// return  `{$this.name} ({$this.number} , {$this.number}))` ;
// }
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// const formatCoordinate = (
//     [locationName: string,
//     latitude: number,
//     longitude: number]
// ): readonly [number, number, string] => {
//     return `Location: ${locationName} (${latitude}, ${longitude})`;
// }
// console.log(formatCoordinate("Dhaka",23.81, 90.41, ));
// const formatCoordinate = (
//     latitude: number,
//     longitude: number,
//     city: string
// ): readonly [number, number, string] => {
//     return [latitude, longitude, city];
// };
// console.log(formatCoordinate(23.81, 90.41, "Dhaka"));
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
export {};
// coordinate.push(12.5)
