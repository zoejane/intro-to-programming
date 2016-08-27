from twilio.rest import TwilioRestClient

account_sid = "AC0c5f39b5d96d56adcc79e9d1e7e77762" # Your Account SID from www.twilio.com/console
auth_token  = "ecb3a5b8d01a4f9a53af4067c651d411"  # Your Auth Token from www.twilio.com/console

client = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="Hello from Python",
    to="+14082906116",    # Replace with your phone number
    from_="+14804675686") # Replace with your Twilio number

print(message.sid)