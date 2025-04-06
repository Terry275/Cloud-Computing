import boto3

# Update these values
BUCKET_NAME = "hao-music-images"
REGION = "us-east-1"  # Update if your bucket is in a different region

dynamodb = boto3.resource('dynamodb', region_name=REGION)
table = dynamodb.Table('Music')

def format_artist_name(artist):
    return artist.lower().replace(" ", "_")

def update_all_images():
    updated = 0

    # Use scan to get all items (only okay for small datasets like this)
    response = table.scan()
    items = response.get("Items", [])

    while True:
        for item in items:
            artist = item["artist"]
            title = item["title"]

            image_file = format_artist_name(artist) + ".jpg"
            new_img_url = f"https://{BUCKET_NAME}.s3.{REGION}.amazonaws.com/{image_file}"

            # Update the item
            table.update_item(
            Key={
                "artist": item["artist"],
                "title": item["title"]
            },
            UpdateExpression="SET img_url = :val",
            ExpressionAttributeValues={":val": new_img_url}
        )

            updated += 1

        # Pagination: if there’s more data, continue scanning
        if "LastEvaluatedKey" in response:
            response = table.scan(ExclusiveStartKey=response["LastEvaluatedKey"])
            items = response.get("Items", [])
        else:
            break

    print(f"{updated} items updated successfully.")

if __name__ == "__main__":
    update_all_images()
