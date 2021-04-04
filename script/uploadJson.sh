mongoimport --uri mongodb+srv://jhuang:Test1234@cluster0.4hjfq.mongodb.net/countries --collection country --drop --type json --file ./public/data_samples/china.json
echo "china data imported"
mongoimport --uri mongodb+srv://jhuang:Test1234@cluster0.4hjfq.mongodb.net/countries --collection country --type json --file ./public/data_samples/japan.json
echo "japan data imported"
mongoimport --uri mongodb+srv://jhuang:Test1234@cluster0.4hjfq.mongodb.net/countries --collection country --type json --file ./public/data_samples/malaysia.json
echo "malaysia data imported"
mongoimport --uri mongodb+srv://jhuang:Test1234@cluster0.4hjfq.mongodb.net/countries --collection country --type json --file ./public/data_samples/singapore.json
echo "singapore data imported"
mongoimport --uri mongodb+srv://jhuang:Test1234@cluster0.4hjfq.mongodb.net/countries --collection country --type json --file ./public/data_samples/south_korea.json
echo "south korea data imported"
mongoimport --uri mongodb+srv://jhuang:Test1234@cluster0.4hjfq.mongodb.net/countries --collection country --type json --file ./public/data_samples/thailand.json
echo "thailand data imported"
mongoimport --uri mongodb+srv://jhuang:Test1234@cluster0.4hjfq.mongodb.net/countries --collection dos_and_donts --type json --file ./public/data_samples/dos_and_donts.json
echo "dos and donts imported"
