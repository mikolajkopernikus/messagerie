# 🔐 Chat P2P Crypté - PeerJS

Application de chat peer-to-peer crypté pour mobiles utilisant PeerJS et WebRTC.

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer un repository GitHub

```bash
# Dans le dossier du projet
git init
git add .
git commit -m "Initial commit - Chat P2P crypté"
```

### Étape 2 : Pousser sur GitHub

1. Créez un nouveau repository sur GitHub (ex: `peerjs-chat`)
2. Puis exécutez :

```bash
git remote add origin https://github.com/VOTRE-USERNAME/peerjs-chat.git
git branch -M main
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Allez dans **Settings** du repository
2. Section **Pages** (menu gauche)
3. Source : sélectionnez **main** branch
4. Cliquez sur **Save**

✅ Votre app sera accessible à : `https://VOTRE-USERNAME.github.io/peerjs-chat/peerjs-chat.html`

## 📱 Utilisation sur Mobile

### Option 1 : Installer comme une vraie application (PWA)

**Sur iPhone/iPad (Safari) :**
1. Ouvrez l'URL GitHub Pages dans Safari
2. Appuyez sur le bouton **"Partager"** (carré avec flèche vers le haut)
3. Faites défiler et sélectionnez **"Sur l'écran d'accueil"**
4. Nommez l'app (ex: "Chat P2P")
5. Appuyez sur **"Ajouter"**

✅ **L'icône apparaît sur votre écran d'accueil comme une vraie app !**

**Sur Android (Chrome) :**
1. Ouvrez l'URL dans Chrome
2. Vous verrez une popup **"Ajouter à l'écran d'accueil"** → Cliquez dessus
   
   *Ou bien :*
   - Menu (3 points verticaux) → **"Installer l'application"**
   - Ou Menu → **"Ajouter à l'écran d'accueil"**
3. Confirmez l'installation

✅ **L'app s'installe et apparaît dans vos applications !**

### Option 2 : Via le navigateur
1. Ouvrez l'URL GitHub Pages dans Safari (iOS) ou Chrome (Android)
2. Utilisez directement dans le navigateur

## 🎯 Comment l'utiliser

### Sur le Mobile 1 :
1. Ouvrir l'URL dans le navigateur
2. Cliquer sur "🚀 Initialiser ma connexion"
3. Copier l'ID généré (ex: `user-abc123xyz`)
4. Envoyer cet ID au Mobile 2 (WhatsApp, SMS, etc.)

### Sur le Mobile 2 :
1. Ouvrir l'URL dans le navigateur
2. Cliquer sur "🚀 Initialiser ma connexion"
3. Coller l'ID reçu dans "ID de votre correspondant"
4. Cliquer sur "📞 Se connecter"

🎉 **Connexion établie !** Vous pouvez maintenant échanger des messages cryptés.

## 🔒 Caractéristiques de sécurité

- ✅ **Cryptage AES-256-GCM** : Tous les messages sont cryptés
- ✅ **Communication P2P directe** : Pas de serveur intermédiaire
- ✅ **WebRTC** : Protocole sécurisé et standard
- ✅ **Pas de stockage** : Les messages ne sont pas sauvegardés

## ⚠️ Limitations

- Les 2 mobiles doivent être **connectés en même temps**
- Nécessite une **connexion Internet** (WiFi ou données mobiles)
- Les messages ne sont **pas persistants** (ils disparaissent après déconnexion)

## 🛠️ Technologies utilisées

- **PeerJS** : Simplification de WebRTC
- **Web Crypto API** : Cryptage natif du navigateur
- **HTML5/CSS3/JavaScript** : Interface responsive
- **GitHub Pages** : Hébergement gratuit

## 📝 Notes

- Fonctionne sur **tous les navigateurs modernes** (Chrome, Safari, Firefox, Edge)
- **Aucune installation** requise
- **100% gratuit**
- **Open source**
