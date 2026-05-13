import json

data = {
    "hand-massager": {
        "th_desc": "ช่วยกระตุ้นการไหลเวียนโลหิต คลายความเมื่อยล้า บรรเทาอาการนิ้วล็อก ลดอาการเหน็บชา และช่วยลดความตึงเครียดจากการใช้งานมือหนักๆ เช่น พิมพ์งาน หรือขับรถ เหมาะสำหรับใช้นวดกดจุดบริเวณฝ่ามือ ง่ามนิ้ว และฝ่าเท้า เพื่อสุขภาพที่ดี",
        "th_how": ["วางไว้ในอุ้งมือแล้วกำ-บีบสลับกัน หรือหมุนคลึงไปมา"],
        "en_desc": "Stimulates blood circulation, relieves fatigue, prevents trigger finger, reduces numbness, and eases hand tension from heavy use such as typing or driving. Ideal for acupressure on palms, between fingers, and soles of the feet for better health.",
        "en_how": ["Place it in your palm and alternately squeeze and release, or roll it around."]
    },
    "hand-keychain": {
        "th_desc": "ช่วยบรรเทาอาการปวดเมื่อยและกระตุ้นการไหลเวียนโลหิต เหมาะสำหรับใช้กดเฉพาะจุด เช่น ฝ่ามือ ฝ่าเท้า บ่า และคอ ช่วยคลายกล้ามเนื้อที่ตึงเครียด ลดอาการเหน็บชา ป้องกันนิ้วล็อก และช่วยให้ร่างกายผ่อนคลาย สามารถห้อยกระเป๋าได้ พกพาสะดวก",
        "th_how": ["วางไว้ในอุ้งมือแล้วกำ-บีบสลับกัน หรือหมุนคลึงไปมา"],
        "en_desc": "Relieves soreness and stimulates blood circulation. Perfect for targeted acupressure on palms, feet, shoulders, and neck. Relieves tight muscles, reduces numbness, prevents trigger finger, and promotes overall relaxation. Comes with a keychain for easy carrying.",
        "en_how": ["Place it in your palm and alternately squeeze and release, or roll it around."]
    },
    "pressure-point-massager": {
        "th_desc": "ช่วยบรรเทาอาการปวดเมื่อยและกระตุ้นการไหลเวียนโลหิต เหมาะสำหรับใช้กดเฉพาะจุด เช่น ฝ่ามือ ฝ่าเท้า บ่า และคอ ช่วยคลายกล้ามเนื้อที่ตึงเครียด ลดอาการเหน็บชา ป้องกันนิ้วล็อก และช่วยให้ร่างกายผ่อนคลาย",
        "th_how": ["มีลักษณะเป็นแท่งไม้เรียว ใช้สำหรับกดจุดเน้นๆ ในบริเวณที่ปวดเมื่อย เช่น คอ บ่า ไหล่ และฝ่าเท้า"],
        "en_desc": "Relieves soreness and stimulates blood circulation. Ideal for targeted acupressure on palms, feet, shoulders, and neck to release muscle tension, reduce numbness, prevent trigger finger, and relax the body.",
        "en_how": ["Features a slender wooden stick design used for deep, targeted acupressure on sore areas like the neck, shoulders, and soles of the feet."]
    },
    "three-leg-massager": {
        "th_desc": "ช่วยบรรเทาอาการปวดเมื่อยตามร่างกาย สลายพังผืด เพิ่มการไหลเวียนโลหิต และบรรเทาอาการตึงเครียดของกล้ามเนื้อได้อย่างตรงจุดและสะดวกสบาย",
        "th_how": [
            "กดจุด (ใช้ขาเดียว): ใช้ขาข้างใดข้างหนึ่งกดลงไปตรงจุดที่ปวดหรือตึงเปรี๊ยะ (Trigger Point) เช่น บริเวณบ่า หรือจุดที่เส้นยึด ค้างไว้ 5-10 วินาทีแล้วปล่อย",
            "รูดคลายเส้น (ใช้ 2 หรือ 3 ขา): วางขาไม้ให้คร่อมมัดกล้ามเนื้อ (เช่น ต้นแขน ต้นขา หรือน่อง) แล้วรูดไปตามแนวยาวของกล้ามเนื้อ วิธีนี้จะช่วยกระจายแรงกดและคลายพังผืดได้เป็นวงกว้าง",
            "นวดอุ้งมือ: วางไม้ในอุ้งมือแล้วใช้มือกำ-คลาย เพื่อบริหารกล้ามเนื้อมือและนิ้ว แก้อาการนิ้วล็อกหรือมือชา"
        ],
        "en_desc": "Relieves body aches, breaks down fascia, boosts blood circulation, and effectively releases muscle tension with precision and comfort.",
        "en_how": [
            "Acupressure (1 Leg): Use one leg to press directly onto trigger points or tight spots (e.g., shoulders). Hold for 5-10 seconds, then release.",
            "Muscle Scraping (2 or 3 Legs): Place the legs over a muscle group (like arms, thighs, or calves) and glide along its length to distribute pressure and release wide areas of fascia.",
            "Palm Massage: Hold the massager in your palm, squeezing and releasing it to exercise hand and finger muscles, relieving trigger finger or numbness."
        ]
    },
    "teardrop-gua-sha": {
        "th_desc": "ช่วยกระตุ้นการไหลเวียนของโลหิต บรรเทาอาการปวดเมื่อยตามร่างกาย โดยเฉพาะบริเวณ คอ บ่า และไหล่ รวมถึงสามารถใช้กดจุดและขูดเพื่อยกกระชับผิวหน้า ลดอาการบวม และระบายน้ำเหลืองได้ดี",
        "th_how": [
            "1.ชโลมออยล์/น้ำมัน: ทาบริเวณที่จะนวดเพื่อลดการเสียดสี (ป้องกันผิวถลอก)",
            "2.ใช้ด้านมน (รูด): ใช้ส่วนโค้งมนขูด/รูดไปตามแนวกล้ามเนื้อ เช่น ขูดจากกลางหน้าออกไปหาหู หรือรูดจากบ่าลงไปแขน เพื่อคลายพังผืด",
            "3.ใช้ด้านแหลม (กด): ใช้ปลายหยดน้ำกดลงบนจุดที่ปวดหรือตึง (เช่น ขมับ ฝ่าเท้า หรือซอกนิ้ว) ค้างไว้ 3-5 วินาที",
            "4.ทิศทาง: ถ้าใช้กับหน้าให้ \"รูดขึ้นและออก\" เสมอเพื่อยกกระชับ"
        ],
        "en_desc": "Stimulates blood flow and relieves body aches, especially around the neck and shoulders. Can also be used for acupressure and facial scraping to lift the skin, reduce puffiness, and promote lymphatic drainage.",
        "en_how": [
            "1. Apply Oil: Lubricate the area to reduce friction and protect the skin.",
            "2. Use the Rounded Edge (Scraping): Glide along muscle lines, such as from the center of the face outward to the ears, or from the shoulders down the arms to release fascia.",
            "3. Use the Pointed End (Pressing): Press the tip onto sore or tight trigger points (e.g., temples, soles, between fingers) and hold for 3-5 seconds.",
            "4. Direction: Always scrape 'up and out' when using on the face for a lifting effect."
        ]
    },
    "spiky-massager": {
        "th_desc": "ช่วยบรรเทาอาการปวดเมื่อยและกระตุ้นการไหลเวียนโลหิต เหมาะสำหรับใช้กดเฉพาะจุด เช่น ฝ่ามือ ฝ่าเท้า บ่า และคอ ช่วยคลายกล้ามเนื้อที่ตึงเครียด ลดอาการเหน็บชา ป้องกันนิ้วล็อก และช่วยให้ร่างกายผ่อนคลาย",
        "th_how": ["วางไว้ในอุ้งมือแล้วกำ-บีบสลับกัน หรือหมุนคลึงไปมา"],
        "en_desc": "Relieves soreness and stimulates blood circulation. Perfect for targeted acupressure on palms, feet, shoulders, and neck to ease muscle tension, reduce numbness, prevent trigger finger, and relax the body.",
        "en_how": ["Place it in your palm and alternately squeeze and release, or roll it around."]
    },
    "spiky-keychain": {
        "th_desc": "ช่วยบรรเทาอาการปวดเมื่อยและกระตุ้นการไหลเวียนโลหิต เหมาะสำหรับใช้กดเฉพาะจุด เช่น ฝ่ามือ ฝ่าเท้า บ่า และคอ ช่วยคลายกล้ามเนื้อที่ตึงเครียด ลดอาการเหน็บชา ป้องกันนิ้วล็อก และช่วยให้ร่างกายผ่อนคลาย สามารถห้อยกระเป๋าได้ พกพาสะดวก",
        "th_how": ["วางไว้ในอุ้งมือแล้วกำ-บีบสลับกัน หรือหมุนคลึงไปมา"],
        "en_desc": "Relieves soreness and stimulates blood circulation. Great for targeted acupressure on palms, feet, shoulders, and neck to ease muscle tension, prevent trigger finger, and relax the body. Includes a keychain for convenient carrying.",
        "en_how": ["Place it in your palm and alternately squeeze and release, or roll it around."]
    },
    "roller-massager": {
        "th_desc": "เป็นอุปกรณ์ช่วยผ่อนคลายที่กระตุ้นการไหลเวียนโลหิต บรรเทาอาการปวดเมื่อยกล้ามเนื้อ และลดอาการบวมน้ำ ใช้งานง่ายด้วยตนเองครอบคลุมตั้งแต่ คอ บ่า หลัง ขา ไปจนถึงฝ่าเท้า ช่วยลดความตึงเครียดสะสมในชีวิตประจําวัน",
        "th_how": ["จับด้ามให้กระชับ กลิ้งขึ้น-ลงอย่างนุ่มนวลบริเวณบ่าและต้นคอเพื่อคลายความตึงเครียด"],
        "en_desc": "A relaxation tool that stimulates blood flow, relieves muscle soreness, and reduces edema. Easy to use for self-massage covering the neck, shoulders, back, legs, and soles. Helps reduce accumulated daily tension.",
        "en_how": ["Hold the handle firmly and roll gently up and down along the shoulders and neck to relieve tension."]
    },
    "four-ball-roller": {
        "th_desc": "ช่วยบรรเทาอาการปวดเมื่อยกล้ามเนื้อ กระตุ้นการไหลเวียนของโลหิต และช่วยผ่อนคลายความตึงเครียดของเส้นประสาท เหมาะสําหรับใช้กลิ้งนวดตามบริเวณต่างๆ เช่น น่อง ขา หลัง บ่า และต้นคอ",
        "th_how": ["กดและกลิ้งลูกกลิ้งไปมาบริเวณที่ต้องการ สามารถใช้นวดร่วมกับน้ำมันนวดหรือครีมทาผิวเพื่อลดการเสียดสีและเพิ่มความลื่นไหลได้ดียิ่งขึ้น"],
        "en_desc": "Relieves muscle soreness, stimulates blood flow, and relaxes nervous tension. Ideal for rolling massages on calves, legs, back, shoulders, and neck.",
        "en_how": ["Press and roll the massager back and forth over the desired area. Can be used with massage oil or lotion to reduce friction and improve the glide."]
    },
    "foot-roller": {
        "th_desc": "ช่วยกระตุ้นการไหลเวียนโลหิต บรรเทาอาการปวดเมื่อยฝ่าเท้า และลดความตึงเครียดของกล้ามเนื้อ โดยปุ่มไม้จะช่วยกดจุดและกระตุ้นเส้นประสาทบริเวณฝ่าเท้า ทําให้รู้สึกผ่อนคลาย สามารถใช้งานได้ง่ายๆ ขณะนั่งทํางานหรือพักผ่อน",
        "th_how": [
            "เตรียมตัว: วางไม้นวดบนพื้นผิวเรียบและนั่งบนเก้าอี้ในท่าที่ผ่อนคลาย",
            "เริ่มนวด: วางเท้าเปล่าลงบนลูกกลิ้ง ค่อยๆ ดันเท้าไปข้างหน้าและถอยหลังช้าๆ เพื่อนวดให้ทั่วฝ่าเท้า",
            "เน้นจุด: หากพบจุดที่ปวดเมื่อยมากเป็นพิเศษ สามารถหยุดลูกกลิ้งและกดน้ำหนักลงไปค้างไว้สัก 5-10 วินาทีเพื่อคลายกล้ามเนื้อ"
        ],
        "en_desc": "Stimulates blood circulation, relieves foot soreness, and reduces muscle tension. Wooden nodes provide acupressure and stimulate nerve endings in the soles for ultimate relaxation. Easy to use while sitting at a desk or resting.",
        "en_how": [
            "Preparation: Place the massager on a flat floor and sit comfortably on a chair.",
            "Start Massaging: Place bare feet on the rollers and slowly push back and forth to massage the entire foot.",
            "Target Points: For particularly sore areas, stop rolling and press down on the nodes for 5-10 seconds to release the tension."
        ]
    },
    "bird-shaped-massager": {
        "th_desc": "ช่วยผ่อนคลายกล้ามเนื้อ โดยรูปทรงจําลองมาจากตัวนก ปลายจะมีความมนและแหลม ช่วยผ่อนแรงนิ้วมือ เหมาะสําหรับผู้ที่มีอาการปวดเมื่อยเฉพาะจุด เช่น คอ บ่า ไหล่ ฝ่ามือ และฝ่าเท้า",
        "th_how": [
            "หัวนก (ส่วนหัวและจงอยปาก): ใช้สําหรับกดจุดสะท้อน (Reflexology) ตามฝ่ามือ ฝ่าเท้า หรือจุดที่ปวดเมื่อยลึกๆ",
            "หางนก: ใช้สําหรับกดจุดและดึงเส้นตามบริเวณบ่า คอ หรือต้นแขน",
            "ท้องนก: ส่วนที่โค้งมนใช้สําหรับการนวดคลึง (Rolling) เป็นวงกว้าง หรือใช้กัวซารีดเส้นตามลําตัว"
        ],
        "en_desc": "Relieves muscle tension. Designed in a bird shape with both rounded and pointed ends to save finger strength. Perfect for targeting localized pain such as the neck, shoulders, palms, and feet.",
        "en_how": [
            "Bird's Head (Beak): Use for reflexology on palms, feet, or deep muscle trigger points.",
            "Bird's Tail: Use for acupressure and scraping along the shoulders, neck, or upper arms.",
            "Bird's Belly: Use the rounded curve for broad rolling massage or body scraping."
        ]
    }
}

out = "const categoryDescriptions = {\n"
for key, item in data.items():
    out += f"    '{key}': {{\n"
    out += f'        overviewTH: {json.dumps(item["th_desc"], ensure_ascii=False)},\n'
    out += f'        overviewEN: {json.dumps(item["en_desc"])},\n'
    out += f'        benefitsTH: {json.dumps(item["th_how"], ensure_ascii=False)},\n'
    out += f'        benefitsEN: {json.dumps(item["en_how"])},\n'
    out += "    },\n"
out += "};\n"

with open('cat_desc_new.js', 'w', encoding='utf-8') as f:
    f.write(out)

print("Generated cat_desc_new.js")
