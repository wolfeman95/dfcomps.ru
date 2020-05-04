export interface SmileInterface {
    name: string;
    row: number;
    col: number;
    group: SmileGroups;
}

export enum SmileGroups {
    MAIN,
    GESTURES,
    DEFRAG,
    FOOD,
    ANIMALS,
    MISC,
    PERSONAL,
}

export class SMILES_CONFIG {
    public static get SMILES(): SmileInterface[] {
        return [
            {
                name: 'grinning',
                row: 1,
                col: 1,
                group: SmileGroups.MAIN,
            },
            {
                name: 'smiley',
                row: 1,
                col: 2,
                group: SmileGroups.MAIN,
            },
            {
                name: 'smile',
                row: 1,
                col: 3,
                group: SmileGroups.MAIN,
            },
            {
                name: 'laughing',
                row: 1,
                col: 4,
                group: SmileGroups.MAIN,
            },
            {
                name: 'sweat_smile',
                row: 1,
                col: 5,
                group: SmileGroups.MAIN,
            },
            {
                name: 'joy',
                row: 1,
                col: 6,
                group: SmileGroups.MAIN,
            },
            {
                name: 'slightly_smiling_face',
                row: 1,
                col: 7,
                group: SmileGroups.MAIN,
            },
            {
                name: 'upside_down_face',
                row: 1,
                col: 8,
                group: SmileGroups.MAIN,
            },
            {
                name: 'wink',
                row: 1,
                col: 9,
                group: SmileGroups.MAIN,
            },
            {
                name: 'blush',
                row: 1,
                col: 10,
                group: SmileGroups.MAIN,
            },
            {
                name: 'innocent',
                row: 1,
                col: 11,
                group: SmileGroups.MAIN,
            },
            {
                name: 'heart_eyes',
                row: 1,
                col: 12,
                group: SmileGroups.MAIN,
            },
            {
                name: 'kissing_heart',
                row: 1,
                col: 13,
                group: SmileGroups.MAIN,
            },
            {
                name: 'kissing_smiling_eyes',
                row: 1,
                col: 14,
                group: SmileGroups.MAIN,
            },
            {
                name: 'sunglasses',
                row: 1,
                col: 15,
                group: SmileGroups.MAIN,
            },
            {
                name: 'relaxed',
                row: 2,
                col: 1,
                group: SmileGroups.MAIN,
            },
            {
                name: 'nerd',
                row: 2,
                col: 2,
                group: SmileGroups.MAIN,
            },
            {
                name: 'yum',
                row: 2,
                col: 3,
                group: SmileGroups.MAIN,
            },
            {
                name: 'smirk_face',
                row: 2,
                col: 4,
                group: SmileGroups.MAIN,
            },
            {
                name: 'stuck_out_tongue',
                row: 2,
                col: 5,
                group: SmileGroups.MAIN,
            },
            {
                name: 'stuck_out_tongue_closed_eyes',
                row: 2,
                col: 6,
                group: SmileGroups.MAIN,
            },
            {
                name: 'stuck_out_tongue_winking_eye',
                row: 2,
                col: 7,
                group: SmileGroups.MAIN,
            },
            {
                name: 'hugging_face',
                row: 2,
                col: 8,
                group: SmileGroups.MAIN,
            },
            {
                name: 'wesmart',
                row: 2,
                col: 9,
                group: SmileGroups.MAIN,
            },
            {
                name: 'thinking_face',
                row: 2,
                col: 10,
                group: SmileGroups.MAIN,
            },
            {
                name: 'neutral_face',
                row: 2,
                col: 11,
                group: SmileGroups.MAIN,
            },
            {
                name: 'expressionless',
                row: 2,
                col: 12,
                group: SmileGroups.MAIN,
            },
            {
                name: 'face_without_mouth',
                row: 2,
                col: 13,
                group: SmileGroups.MAIN,
            },
            {
                name: 'relieved',
                row: 2,
                col: 14,
                group: SmileGroups.MAIN,
            },
            {
                name: 'angry',
                row: 2,
                col: 15,
                group: SmileGroups.MAIN,
            },
            {
                name: 'anguished',
                row: 3,
                col: 1,
                group: SmileGroups.MAIN,
            },
            {
                name: 'astonished',
                row: 3,
                col: 2,
                group: SmileGroups.MAIN,
            },
            {
                name: 'cold_sweat',
                row: 3,
                col: 3,
                group: SmileGroups.MAIN,
            },
            {
                name: 'confounded',
                row: 3,
                col: 4,
                group: SmileGroups.MAIN,
            },
            {
                name: 'confused',
                row: 3,
                col: 5,
                group: SmileGroups.MAIN,
            },
            {
                name: 'crying',
                row: 3,
                col: 6,
                group: SmileGroups.MAIN,
            },
            {
                name: 'disappointed',
                row: 3,
                col: 7,
                group: SmileGroups.MAIN,
            },
            {
                name: 'dizzy',
                row: 3,
                col: 8,
                group: SmileGroups.MAIN,
            },
            {
                name: 'face_with_termometer',
                row: 3,
                col: 9,
                group: SmileGroups.MAIN,
            },
            {
                name: 'fearful',
                row: 3,
                col: 10,
                group: SmileGroups.MAIN,
            },
            {
                name: 'flushed',
                row: 3,
                col: 11,
                group: SmileGroups.MAIN,
            },
            {
                name: 'frowning',
                row: 3,
                col: 12,
                group: SmileGroups.MAIN,
            },
            {
                name: 'hushed',
                row: 3,
                col: 13,
                group: SmileGroups.MAIN,
            },
            {
                name: 'loudly_crying',
                row: 3,
                col: 14,
                group: SmileGroups.MAIN,
            },
            {
                name: 'omg',
                row: 3,
                col: 15,
                group: SmileGroups.MAIN,
            },
            {
                name: 'persevering',
                row: 4,
                col: 1,
                group: SmileGroups.MAIN,
            },
            {
                name: 'rolling_eyes',
                row: 4,
                col: 2,
                group: SmileGroups.MAIN,
            },
            {
                name: 'sad',
                row: 4,
                col: 3,
                group: SmileGroups.MAIN,
            },
            {
                name: 'sick',
                row: 4,
                col: 4,
                group: SmileGroups.MAIN,
            },
            {
                name: 'sleeping',
                row: 4,
                col: 5,
                group: SmileGroups.MAIN,
            },
            {
                name: 'surprised',
                row: 4,
                col: 6,
                group: SmileGroups.MAIN,
            },
            {
                name: 'tired',
                row: 4,
                col: 7,
                group: SmileGroups.MAIN,
            },
            {
                name: 'unamused',
                row: 4,
                col: 8,
                group: SmileGroups.MAIN,
            },
            {
                name: 'very_angry',
                row: 4,
                col: 9,
                group: SmileGroups.MAIN,
            },
            {
                name: 'very_mad',
                row: 4,
                col: 10,
                group: SmileGroups.MAIN,
            },
            {
                name: 'very_sad',
                row: 4,
                col: 11,
                group: SmileGroups.MAIN,
            },
            {
                name: 'weary',
                row: 4,
                col: 12,
                group: SmileGroups.MAIN,
            },
            {
                name: 'worried',
                row: 4,
                col: 13,
                group: SmileGroups.MAIN,
            },
            {
                name: 'zipper_mouth',
                row: 4,
                col: 14,
                group: SmileGroups.MAIN,
            },
            {
                name: 'angry_devil',
                row: 4,
                col: 15,
                group: SmileGroups.MAIN,
            },
            {
                name: 'smiling_devil',
                row: 5,
                col: 1,
                group: SmileGroups.MAIN,
            },
            {
                name: 'alien',
                row: 5,
                col: 2,
                group: SmileGroups.MAIN,
            },
            {
                name: 'eyes',
                row: 5,
                col: 3,
                group: SmileGroups.MAIN,
            },
            {
                name: 'ghost',
                row: 5,
                col: 4,
                group: SmileGroups.MAIN,
            },
            {
                name: 'poop',
                row: 5,
                col: 5,
                group: SmileGroups.MAIN,
            },
            {
                name: 'clapping',
                row: 5,
                col: 6,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'fist_hand',
                row: 5,
                col: 7,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'horns',
                row: 5,
                col: 8,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'muscle',
                row: 5,
                col: 9,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'ok_hand',
                row: 5,
                col: 10,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'pointing_up',
                row: 5,
                col: 11,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'pray',
                row: 5,
                col: 12,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'raised_hand',
                row: 5,
                col: 13,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'thumbs_down',
                row: 5,
                col: 14,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'thumbs_up',
                row: 5,
                col: 15,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'victory',
                row: 6,
                col: 1,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'waving_hand',
                row: 6,
                col: 2,
                group: SmileGroups.GESTURES,
            },
            {
                name: 'hear_no_evil',
                row: 6,
                col: 3,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'see_no_evil',
                row: 6,
                col: 4,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'speak_no_evil',
                row: 6,
                col: 5,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'ant',
                row: 6,
                col: 6,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'bear',
                row: 6,
                col: 7,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'boar',
                row: 6,
                col: 8,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'camel',
                row: 6,
                col: 9,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'cat',
                row: 6,
                col: 10,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'chicken',
                row: 6,
                col: 11,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'cow',
                row: 6,
                col: 12,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'dog',
                row: 6,
                col: 13,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'dolphin',
                row: 6,
                col: 14,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'elephant',
                row: 6,
                col: 15,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'fish',
                row: 7,
                col: 1,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'frog',
                row: 7,
                col: 2,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'honeybee',
                row: 7,
                col: 3,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'horse',
                row: 7,
                col: 4,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'lady_beetle',
                row: 7,
                col: 5,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'monkey',
                row: 7,
                col: 6,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'monkey_face',
                row: 7,
                col: 7,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'octopus',
                row: 7,
                col: 8,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'panda',
                row: 7,
                col: 9,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'pig',
                row: 7,
                col: 10,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'rabbit',
                row: 7,
                col: 11,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'sheep',
                row: 7,
                col: 12,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'snake',
                row: 7,
                col: 13,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'tiger',
                row: 7,
                col: 14,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'tropical_fish',
                row: 7,
                col: 15,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'turtle',
                row: 8,
                col: 1,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'unicorn',
                row: 8,
                col: 2,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'whale',
                row: 8,
                col: 3,
                group: SmileGroups.ANIMALS,
            },
            {
                name: 'banana',
                row: 8,
                col: 4,
                group: SmileGroups.FOOD,
            },
            {
                name: 'beer',
                row: 8,
                col: 5,
                group: SmileGroups.FOOD,
            },
            {
                name: 'birthday_cake',
                row: 8,
                col: 6,
                group: SmileGroups.FOOD,
            },
            {
                name: 'cake',
                row: 8,
                col: 7,
                group: SmileGroups.FOOD,
            },
            {
                name: 'cheeseburger',
                row: 8,
                col: 8,
                group: SmileGroups.FOOD,
            },
            {
                name: 'cherry',
                row: 8,
                col: 9,
                group: SmileGroups.FOOD,
            },
            {
                name: 'chocolate',
                row: 8,
                col: 10,
                group: SmileGroups.FOOD,
            },
            {
                name: 'coffee',
                row: 8,
                col: 11,
                group: SmileGroups.FOOD,
            },
            {
                name: 'dango',
                row: 8,
                col: 12,
                group: SmileGroups.FOOD,
            },
            {
                name: 'donut',
                row: 8,
                col: 13,
                group: SmileGroups.FOOD,
            },
            {
                name: 'eggplant',
                row: 8,
                col: 14,
                group: SmileGroups.FOOD,
            },
            {
                name: 'french_fries',
                row: 8,
                col: 15,
                group: SmileGroups.FOOD,
            },
            {
                name: 'grape',
                row: 9,
                col: 1,
                group: SmileGroups.FOOD,
            },
            {
                name: 'green_apple',
                row: 9,
                col: 2,
                group: SmileGroups.FOOD,
            },
            {
                name: 'honeypot',
                row: 9,
                col: 3,
                group: SmileGroups.FOOD,
            },
            {
                name: 'icecream',
                row: 9,
                col: 4,
                group: SmileGroups.FOOD,
            },
            {
                name: 'lemon',
                row: 9,
                col: 5,
                group: SmileGroups.FOOD,
            },
            {
                name: 'lolipop',
                row: 9,
                col: 6,
                group: SmileGroups.FOOD,
            },
            {
                name: 'margarita',
                row: 9,
                col: 7,
                group: SmileGroups.FOOD,
            },
            {
                name: 'meat',
                row: 9,
                col: 8,
                group: SmileGroups.FOOD,
            },
            {
                name: 'mushroom',
                row: 9,
                col: 9,
                group: SmileGroups.FOOD,
            },
            {
                name: 'orange',
                row: 9,
                col: 10,
                group: SmileGroups.FOOD,
            },
            {
                name: 'peach',
                row: 9,
                col: 11,
                group: SmileGroups.FOOD,
            },
            {
                name: 'pizza',
                row: 9,
                col: 12,
                group: SmileGroups.FOOD,
            },
            {
                name: 'red_apple',
                row: 9,
                col: 13,
                group: SmileGroups.FOOD,
            },
            {
                name: 'taco',
                row: 9,
                col: 14,
                group: SmileGroups.FOOD,
            },
            {
                name: 'watermelon',
                row: 9,
                col: 15,
                group: SmileGroups.FOOD,
            },
            {
                name: 'wine',
                row: 10,
                col: 1,
                group: SmileGroups.FOOD,
            },
            {
                name: '100',
                row: 10,
                col: 2,
                group: SmileGroups.MISC,
            },
            {
                name: 'airplane',
                row: 10,
                col: 3,
                group: SmileGroups.MISC,
            },
            {
                name: 'bicycle',
                row: 10,
                col: 4,
                group: SmileGroups.MISC,
            },
            {
                name: 'cloud',
                row: 10,
                col: 5,
                group: SmileGroups.MISC,
            },
            {
                name: 'crown',
                row: 10,
                col: 6,
                group: SmileGroups.MISC,
            },
            {
                name: 'cyclone',
                row: 10,
                col: 7,
                group: SmileGroups.MISC,
            },
            {
                name: 'dark_blue_moon',
                row: 10,
                col: 8,
                group: SmileGroups.MISC,
            },
            {
                name: 'diamond',
                row: 10,
                col: 9,
                group: SmileGroups.MISC,
            },
            {
                name: 'fire',
                row: 10,
                col: 10,
                group: SmileGroups.MISC,
            },
            {
                name: 'footprints',
                row: 10,
                col: 11,
                group: SmileGroups.MISC,
            },
            {
                name: 'glasses',
                row: 10,
                col: 12,
                group: SmileGroups.MISC,
            },
            {
                name: 'globe',
                row: 10,
                col: 13,
                group: SmileGroups.MISC,
            },
            {
                name: 'magic_crystal',
                row: 10,
                col: 14,
                group: SmileGroups.MISC,
            },
            {
                name: 'magic_hat',
                row: 10,
                col: 15,
                group: SmileGroups.MISC,
            },
            {
                name: 'milky_way',
                row: 11,
                col: 1,
                group: SmileGroups.MISC,
            },
            {
                name: 'money_bag',
                row: 11,
                col: 2,
                group: SmileGroups.MISC,
            },
            {
                name: 'paw',
                row: 11,
                col: 3,
                group: SmileGroups.MISC,
            },
            {
                name: 'shooting_star',
                row: 11,
                col: 4,
                group: SmileGroups.MISC,
            },
            {
                name: 'snowflake',
                row: 11,
                col: 5,
                group: SmileGroups.MISC,
            },
            {
                name: 'snowman',
                row: 11,
                col: 6,
                group: SmileGroups.MISC,
            },
            {
                name: 'space_rocket',
                row: 11,
                col: 7,
                group: SmileGroups.MISC,
            },
            {
                name: 'speech_bubble',
                row: 11,
                col: 8,
                group: SmileGroups.MISC,
            },
            {
                name: 'star',
                row: 11,
                col: 9,
                group: SmileGroups.MISC,
            },
            {
                name: 'sun',
                row: 11,
                col: 10,
                group: SmileGroups.MISC,
            },
            {
                name: 'sun_behind_clouds',
                row: 11,
                col: 11,
                group: SmileGroups.MISC,
            },
            {
                name: 'sunflower',
                row: 11,
                col: 12,
                group: SmileGroups.MISC,
            },
            {
                name: 'sweat_water',
                row: 11,
                col: 13,
                group: SmileGroups.MISC,
            },
            {
                name: 'unknown_man',
                row: 11,
                col: 14,
                group: SmileGroups.MISC,
            },
            {
                name: 'virus',
                row: 11,
                col: 15,
                group: SmileGroups.MISC,
            },
            {
                name: 'volcano',
                row: 12,
                col: 1,
                group: SmileGroups.MISC,
            },
            {
                name: 'yellow_moon',
                row: 12,
                col: 2,
                group: SmileGroups.MISC,
            },
            {
                name: 'gauntlet',
                row: 12,
                col: 3,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'grenade',
                row: 12,
                col: 4,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'rocket',
                row: 12,
                col: 5,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'plasma',
                row: 12,
                col: 6,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'bfg',
                row: 12,
                col: 7,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'rabbit',
                row: 12,
                col: 8,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'bones',
                row: 12,
                col: 9,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'sarge',
                row: 12,
                col: 10,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'woody',
                row: 12,
                col: 11,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'meow',
                row: 12,
                col: 12,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'biblethump',
                row: 12,
                col: 13,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'coolstorybob',
                row: 12,
                col: 14,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'frankerz',
                row: 12,
                col: 15,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'gachigasm',
                row: 13,
                col: 1,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'kappa',
                row: 13,
                col: 2,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'kreygasm',
                row: 13,
                col: 3,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'monkas',
                row: 13,
                col: 4,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'net_ty',
                row: 13,
                col: 5,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'pogchamp',
                row: 13,
                col: 6,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'slowpoke',
                row: 13,
                col: 7,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'smorc',
                row: 13,
                col: 8,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'vagan',
                row: 13,
                col: 9,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'wutface',
                row: 13,
                col: 10,
                group: SmileGroups.DEFRAG,
            },
            {
                name: 'brigand1',
                row: 13,
                col: 11,
                group: SmileGroups.PERSONAL,
            },
            {
                name: 'monstrik1',
                row: 13,
                col: 12,
                group: SmileGroups.PERSONAL,
            },
            {
                name: 'moskal1',
                row: 13,
                col: 13,
                group: SmileGroups.PERSONAL,
            },
            {
                name: 'puz1',
                row: 13,
                col: 14,
                group: SmileGroups.PERSONAL,
            },
            {
                name: 'tutty1',
                row: 13,
                col: 15,
                group: SmileGroups.PERSONAL,
            },
            {
                name: 'xyligan1',
                row: 14,
                col: 1,
                group: SmileGroups.PERSONAL,
            },
        ];
    }

    public static get SMILES_GROUP_INFO(): Record<SmileGroups, { order: number; name: string }> {
        return {
            [SmileGroups.PERSONAL]: { order: 1, name: 'personal_smiles' },
            [SmileGroups.DEFRAG]: { order: 2, name: 'defrag_smiles' },
            [SmileGroups.MAIN]: { order: 3, name: 'main_smiles' },
            [SmileGroups.GESTURES]: { order: 4, name: 'gesture_smiles' },
            [SmileGroups.FOOD]: { order: 5, name: 'food_smiles' },
            [SmileGroups.ANIMALS]: { order: 6, name: 'animals_smiles' },
            [SmileGroups.MISC]: { order: 7, name: 'misc_smiles' },
        };
    }
}
