const categories = {
    'spiky-massager': {
        name: 'ไม้นวดหนาม',
        nameEN: 'Spiky Massager',
        folder: 'spiky massager',
        size: '2 x 8 cm',
        price: 220,
        items: [
            { file: '32.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '34.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '36.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '38.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '40.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '42.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '44.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'hand-massager': {
        name: 'ไม้นวดมือ',
        nameEN: 'Hand Massager',
        folder: 'hand massager',
        size: '4.5 x 4.5 cm',
        price: 190,
        items: [
            { file: '46.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '48.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '50.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '52.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '54.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '56.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '58.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'foot-roller': {
        name: 'ไม้นวดเท้าลูกกลิ้ง',
        nameEN: 'Foot Massage Roller',
        folder: 'foot massage roller',
        size: '24 x 27 x 9 cm',
        price: 500,
        items: [
            { file: '10.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '11.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '12.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '13.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '14.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '15.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '16.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'bird-shaped-massager': {
        name: 'ไม้นวดรูปนก',
        nameEN: 'Bird-Shaped Massager',
        folder: ' bird-shaped massager', // leading space
        size: '7 x 14 cm',
        price: 190,
        items: [
            { file: '17.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '18.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '19.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '20.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '21.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '22.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '23.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'roller-massager': {
        name: 'ไม้นวดลูกกลิ้ง',
        nameEN: 'Roller Massager',
        folder: 'roller massager',
        size: '7 x 17 cm',
        price: 320,
        items: [
            { file: '24.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '25.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '26.png', color: 'สีเขียว', colorEN: 'Green' },
            { file: '27.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '28.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '29.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '30.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'teardrop-gua-sha': {
        name: 'ไม้กัวซาหยดน้ำ',
        nameEN: 'Teardrop Gua Sha',
        folder: 'teardrop gua sha',
        size: '4 x 13 cm',
        price: 180,
        items: [
            { file: '73.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '74.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '75.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '76.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '77.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '78.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '79.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'three-leg-massager': {
        name: 'ไม้นวดสามขา',
        nameEN: 'Three-Leg Massager',
        folder: 'three-leg massager.', // trailing dot
        size: '9 x 9.5 cm',
        price: 250,
        items: [
            { file: '66.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '67.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '68.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '69.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '70.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '71.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '72.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'four-ball-roller': {
        name: 'ไม้นวดลูกกลิ้ง 4 ลูก',
        nameEN: '4-Ball Roller Massager',
        folder: '4-ball roller massager',
        size: '7 x 17 x 8 cm',
        price: 450,
        items: [
            { file: '3.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '4.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '5.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '6.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '7.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '8.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '9.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'spiky-keychain': {
        name: 'ไม้นวดหนาม มีพวงกุญแจ',
        nameEN: 'Spiky Massager with Keychain',
        folder: 'spiky massager with keychain',
        size: '2 x 8 cm',
        price: 290,
        items: [
            { file: '31.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '33.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '35.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '37.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '39.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '41.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '43.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'hand-keychain': {
        name: 'ไม้นวดมือ มีพวงกุญแจ',
        nameEN: 'Hand Massager with Keychain',
        folder: 'hand massager with keychain',
        size: '4.5 x 4.5 cm',
        price: 240,
        items: [
            { file: '45.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '47.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '49.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '51.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '53.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '55.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '57.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'pressure-point-massager': {
        name: 'ไม้นวดกดจุด',
        nameEN: 'Pressure Point Massager',
        folder: 'pressure point massager',
        size: '16 cm',
        price: 140,
        items: [
            { file: '59.png', color: 'สีฟ้าเข้ม', colorEN: 'Dark Blue' },
            { file: '60.png', color: 'สีฟ้าอ่อน', colorEN: 'Light Blue' },
            { file: '61.png', color: 'สีเขียวอ่อน', colorEN: 'Light Green' },
            { file: '62.png', color: 'สีแดง', colorEN: 'Red' },
            { file: '63.png', color: 'สีชมพู', colorEN: 'Pink' },
            { file: '64.png', color: 'สีม่วงอ่อน', colorEN: 'Light Purple' },
            { file: '65.png', color: 'สีเหลือง', colorEN: 'Yellow' }
        ]
    },
    'premium-box-set': {
        name: 'พรีเมียมบ็อกซ์เซ็ต',
        nameEN: 'Premium Box Set',
        folder: 'Premium Box Set',
        size: 'N/A',
        price: 690,
        items: [
            { file: 'pic-The Pollen Set.png', color: 'สีม่วงลาเวนเดอร์', colorEN: 'Lavender Purple', nameOverride: 'ละอองเกสร', nameENOverride: 'The Pollen Set', desc: 'สัมผัสที่อ่อนโยนและนุ่มนวล ดังความบอบบางของเกสรดอกไม้ที่ช่วยเติมเต็มความสดชื่น', descEN: 'A gentle and soft touch, like the delicacy of flower pollen that replenishes freshness.' },
            { file: 'pic-The Wave Set.png', color: 'สีฟ้าเทา', colorEN: 'Grayish Blue', nameOverride: 'ระลอกคลื่น', nameENOverride: 'The Wave Set', desc: 'ให้ความรู้สึกเย็นสบายเหมือนอยู่ท่ามกลางสายน้ำ ช่วยปลอบประโลมผิวและกล้ามเนื้อ', descEN: 'Provides a cool and relaxing sensation as if in the midst of flowing water, soothing both skin and muscles.' },
            { file: 'pic-The Soil Set.png', color: 'สีน้ำตาลเทา', colorEN: 'Grayish Brown', nameOverride: 'อุ่นไอดีน', nameENOverride: 'The Soil Set', desc: 'คืนความสมดุลให้ร่างกายด้วยพลังแห่งธรรมชาติเรียบง่าย มั่นคง และผ่อนคลายอย่างล้ำลึก', descEN: 'Restores bodily balance with simple, steady natural power for a deep and meditative relaxation.' }
        ]
    }
};

// Generate the products list
const products = [];
let globalId = 1;

for (const [key, cat] of Object.entries(categories)) {
    cat.items.forEach((item) => {
        const isBoxSet = key === 'premium-box-set';
        const imgPath = isBoxSet 
            ? `./:assets/Premium Box Set/${item.file}`
            : `./:assets/all products/${cat.folder}/${item.file}`;
            
        products.push({
            id: globalId++,
            name: item.nameOverride ? item.nameOverride : `${cat.name} (${item.color})`,
            nameEN: item.nameENOverride ? item.nameENOverride : `${cat.nameEN} (${item.colorEN})`,
            category: key,
            color: item.color || '',
            colorEN: item.colorEN || '',
            size: cat.size,
            image: imgPath,
            price: cat.price,
            desc: item.desc || '',
            descEN: item.descEN || '',
            siblings: isBoxSet ? [] : cat.items.map(sib => ({
                color: sib.color,
                colorEN: sib.colorEN,
                image: `./:assets/all products/${cat.folder}/${sib.file}`
            }))
        });
    });
}
