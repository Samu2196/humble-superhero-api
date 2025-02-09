curl -v http://localhost:5000/superheros -X POST -H "Content-Type: application/json" -d '{
    "name": "Superman",
    "superPower": "flight",
    "humilityScore": 9
  }'