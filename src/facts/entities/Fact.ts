import { hash } from "@/utils/hash";

import cat1 from "@/assets/images/cat-1.png";
import cat2 from "@/assets/images/cat-2.png";
import cat3 from "@/assets/images/cat-3.png";
import cat4 from "@/assets/images/cat-4.png";
import cat5 from "@/assets/images/cat-5.png";
import cat6 from "@/assets/images/cat-6.png";
import cat7 from "@/assets/images/cat-7.png";
import cat8 from "@/assets/images/cat-8.png";
import cat9 from "@/assets/images/cat-9.png";
import { randint } from "@/utils/random";

export const SHORT_FACT_MAX_LENGTH = 100;
export const FACT_IMAGES_LS_KEY = "factImages";

const imageUrls = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9];

export class Fact {
  constructor(fact: string, length: number) {
    this.text = fact;
    this.length = length;
    this.id = hash(fact);
    this.image = Fact.getImage(this.id);
  }

  public text: string;
  public length: number;
  public id: number;
  public image: string;

  get isShort() {
    return this.length <= SHORT_FACT_MAX_LENGTH;
  }

  private static getImage(id: number) {
    const savedImagesJson = localStorage.getItem(FACT_IMAGES_LS_KEY);
    let savedImages: Record<string, string> = {} as Record<string, string>;

    if (!savedImagesJson) {
      savedImages[id] = Fact.pickRandomImage();
      localStorage.setItem(FACT_IMAGES_LS_KEY, JSON.stringify(savedImages));
    } else {
      savedImages = JSON.parse(savedImagesJson);

      if (!savedImages[id]) {
        savedImages[id] = Fact.pickRandomImage();
        localStorage.setItem(FACT_IMAGES_LS_KEY, JSON.stringify(savedImages));
      }
    }

    return savedImages[id];
  }

  private static pickRandomImage() {
    const imageNumber = randint(0, imageUrls.length - 1);
    const imageUrl = imageUrls[imageNumber];

    return imageUrl;
  }
}
