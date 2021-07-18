import Smartphone from "./smartphone";
import Chip from './chip';

const cel: Smartphone = new Smartphone("Iphone", 4000, "battery 1A");
const chipTigo: Chip = new Chip("tigo", 3004677212);
const chipClaro: Chip = new Chip("claro", 3204657890);

cel.addChip(chipTigo);
cel.addChip(chipClaro);

cel.show();