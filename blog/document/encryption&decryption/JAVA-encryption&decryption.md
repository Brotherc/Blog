---
title: JAVA-加解密实现
tags:
  - 加密/解密
---
##  Java实现Base64加密
![](./assets/JAVA/1.jpg)
![](./assets/JAVA/2.jpg)
![](./assets/JAVA/3.jpg)
![](./assets/JAVA/4.jpg)
![](./assets/JAVA/5.jpg)
![](./assets/JAVA/6.jpg)
![](./assets/JAVA/7.jpg)
![](./assets/JAVA/8.jpg)
![](./assets/JAVA/9.jpg)
![](./assets/JAVA/10.jpg)
![](./assets/JAVA/11.jpg)
![](./assets/JAVA/12.jpg)
![](./assets/JAVA/13.jpg)
![](./assets/JAVA/14.jpg)
![](./assets/JAVA/15.jpg)
![](./assets/JAVA/16.jpg)
```java
import org.apache.commons.codec.binary.Base64;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

public class Base64Test 
{

	public static final String src = "base64 test";
	public static void main(String[] args) 
	{
		jdkBase64();
		
		commonsCodesBase64();

		bouncyCastleBase64();
	}
	
	// 用jdk实现
	public static void jdkBase64()
	{
		try 
		{
			BASE64Encoder encoder = new BASE64Encoder();
			String encode = encoder.encode(src.getBytes());
			System.out.println("encode:" + encode);
			
			BASE64Decoder decoder = new BASE64Decoder();
			System.out.println("decode:" + new String(decoder.decodeBuffer(encode)));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	// 用Apache的common codes实现
	public static void commonsCodesBase64()
	{
		byte[] encodeBytes = Base64.encodeBase64(src.getBytes());
		System.out.println("common codes encode:" + new String(encodeBytes));
		
		byte[] dencodeBytes = Base64.decodeBase64(encodeBytes);
		System.out.println("common codes decode:" + new String(dencodeBytes));
		
	}
	

	// 用bouncy castle实现
	public static void bouncyCastleBase64()
	{
		byte[] encodeBytes = org.bouncycastle.util.encoders.Base64.encode(src.getBytes());
		System.out.println("bouncy castle encode:" + new String(encodeBytes));
		
		byte[] dencodeBytes = org.bouncycastle.util.encoders.Base64.decode(encodeBytes);
		System.out.println("bouncy castle decode:" + new String(dencodeBytes));
		
	}

}
```
![](./assets/JAVA/17.jpg)
![](./assets/JAVA/18.jpg)

##  Java实现消息摘要算法加密
![](./assets/JAVA/28.jpg)
![](./assets/JAVA/29.jpg)
![](./assets/JAVA/30.jpg)
```java
import java.security.MessageDigest;
import java.security.Security;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.bouncycastle.crypto.digests.MD4Digest;
import org.bouncycastle.crypto.digests.MD5Digest;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class MD5Test 
{

	public static final String src = "md5 test";
	public static void main(String[] args) 
	{
		jdkMD5();
		jdkMD2();
		
		bcMD4();
		bcMD5();
		
		bc2jdkMD4();
		
		ccMD5();
		ccMD2();

	}
	
	// 用jdk实现:MD5
	public static void jdkMD5()
	{
		try 
		{
			MessageDigest md = MessageDigest.getInstance("MD5");
			byte[] md5Bytes = md.digest(src.getBytes());
			System.out.println("JDK MD5:" + Hex.encodeHexString(md5Bytes));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	// 用jdk实现:MD2
	public static void jdkMD2()
	{
		try 
		{
			MessageDigest md = MessageDigest.getInstance("MD2");
			byte[] md2Bytes = md.digest(src.getBytes());
			System.out.println("JDK MD2:" + Hex.encodeHexString(md2Bytes));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	// 用bouncy castle实现:MD5
	public static void bcMD5()
	{
		MD5Digest digest = new MD5Digest();
		digest.update(src.getBytes(),0,src.getBytes().length);
		byte[] md5Bytes = new byte[digest.getDigestSize()];
		digest.doFinal(md5Bytes, 0);
		System.out.println("bouncy castle MD5:" + org.bouncycastle.util.encoders.Hex.toHexString(md5Bytes));
		
	}
	

	// 用bouncy castle实现:MD4
	public static void bcMD4()
	{
		MD4Digest digest = new MD4Digest();
		digest.update(src.getBytes(),0,src.getBytes().length);
		byte[] md4Bytes = new byte[digest.getDigestSize()];
		digest.doFinal(md4Bytes, 0);
		System.out.println("bouncy castle MD4:" + org.bouncycastle.util.encoders.Hex.toHexString(md4Bytes));
	}
	
	// 用bouncy castle与jdk结合实现:MD4
	public static void bc2jdkMD4()
	{
		try 
		{
			Security.addProvider(new BouncyCastleProvider());
			MessageDigest md = MessageDigest.getInstance("MD4");
			byte[] md4Bytes = md.digest(src.getBytes());
			System.out.println("bc and JDK MD4:" + Hex.encodeHexString(md4Bytes));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	// 用common codes实现实现:MD5
	public static void ccMD5()
	{
		System.out.println("common codes MD5:" + DigestUtils.md5Hex(src.getBytes()));
	}
	
	// 用common codes实现实现:MD2
	public static void ccMD2()
	{
		System.out.println("common codes MD2:" + DigestUtils.md2Hex(src.getBytes()));
	}

}
```
![](./assets/JAVA/31.jpg)
![](./assets/JAVA/32.jpg)
```java
import java.security.MessageDigest;
import java.security.Security;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.bouncycastle.crypto.Digest;
import org.bouncycastle.crypto.digests.SHA1Digest;
import org.bouncycastle.crypto.digests.SHA224Digest;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import java.math.BigInteger;



public class SHATest 
{
	public static final String src = "sha test";
	public static void main(String[] args) 
	{
		jdkSHA1();
		bcSHA1();
		bcSHA224();
		bcSHA224b();
		generateSha256();
		ccSHA1();

	}
	
	// 用jdk实现:SHA1
	public static void jdkSHA1()
	{
		try 
		{
			MessageDigest md = MessageDigest.getInstance("SHA");
			md.update(src.getBytes());
			System.out.println("jdk sha-1:" + Hex.encodeHexString(md.digest()));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	// 用bouncy castle实现:SHA1 
	public static void bcSHA1()
	{
		
		Digest digest = new SHA1Digest();
		digest.update(src.getBytes(), 0, src.getBytes().length );
		byte[] sha1Bytes = new byte[digest.getDigestSize()];
		digest.doFinal(sha1Bytes, 0);
		System.out.println("bc sha-1:" + org.bouncycastle.util.encoders.Hex.toHexString(sha1Bytes));		
	}
	

	// 用bouncy castle实现:SHA224 
	public static void bcSHA224()
	{
		
		Digest digest = new SHA224Digest();
		digest.update(src.getBytes(), 0, src.getBytes().length );
		byte[] sha224Bytes = new byte[digest.getDigestSize()];
		digest.doFinal(sha224Bytes, 0);
		System.out.println("bc sha-224:" + org.bouncycastle.util.encoders.Hex.toHexString(sha224Bytes));		
	}
	
	// 用bouncy castle与jdk结合实现:SHA224 
	public static void bcSHA224b()
	{
		
		try 
		{
			Security.addProvider(new BouncyCastleProvider());
			MessageDigest md = MessageDigest.getInstance("SHA224");
			md.update(src.getBytes());
			System.out.println("bc and JDK sha-224:" + Hex.encodeHexString(md.digest()));
			
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}
	public static void generateSha256() {
		MessageDigest md = MessageDigest.getInstance("SHA-256");

        md.update(src.getBytes("UTF-8")); // Change this to "UTF-16" if needed
        byte[] digest = md.digest();
        BigInteger bigInt = new BigInteger(1, digest);
        System.out.println("Sha256 hash: " + bigInt.toString(16));
	}
	
	// 用common codes实现实现:SHA1
	public static void ccSHA1()
	{
		System.out.println("common codes SHA1 - 1 :" + DigestUtils.sha1Hex(src.getBytes()));
		System.out.println("common codes SHA1 - 2 :" + DigestUtils.sha1Hex(src));
	}
	
}
```
![](./assets/JAVA/33.jpg)
![](./assets/JAVA/34.jpg)
![](./assets/JAVA/35.jpg)
![](./assets/JAVA/36.jpg)
```java
import javax.crypto.KeyGenerator;
import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Hex;
import org.bouncycastle.crypto.digests.MD5Digest;
import org.bouncycastle.crypto.macs.HMac;
import org.bouncycastle.crypto.params.KeyParameter;

public class HMACTest 
{
	public static final String src = "hmac test";

	public static void main(String[] args) 
	{
		jdkHmacMD5();
		bcHmacMD5();

	}
	
	// 用jdk实现:
	public static void jdkHmacMD5()
	{
		try 
		{
			// 初始化KeyGenerator
			KeyGenerator keyGenerator = KeyGenerator.getInstance("HmacMD5");
			// 产生密钥
			SecretKey secretKey = keyGenerator.generateKey();
			// 获取密钥
//			byte[] key = secretKey.getEncoded();
			byte[] key = Hex.decodeHex(new char[]{'1','2','3','4','5','6','7','8','9','a','b','c','d','e' });
			
			// 还原密钥
			SecretKey restoreSecretKey = new SecretKeySpec(key, "HmacMD5");
			// 实例化MAC
			Mac mac = Mac.getInstance(restoreSecretKey.getAlgorithm());
			// 初始化MAC
			mac.init(restoreSecretKey);
			// 执行摘要
			byte[] hmacMD5Bytes = mac.doFinal(src.getBytes());
			System.out.println("jdk hmacMD5:" + Hex.encodeHexString(hmacMD5Bytes));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	// 用bouncy castle实现:
	public static void bcHmacMD5()
	{
		HMac hmac = new HMac(new MD5Digest());
		// 必须是16进制的字符，长度必须是2的倍数
		hmac.init(new KeyParameter(org.bouncycastle.util.encoders.Hex.decode("123456789abcde")));
		hmac.update(src.getBytes(), 0, src.getBytes().length);
		
		// 执行摘要
		byte[] hmacMD5Bytes = new byte[hmac.getMacSize()];
		hmac.doFinal(hmacMD5Bytes, 0);
		System.out.println("bc hmacMD5:" + org.bouncycastle.util.encoders.Hex.toHexString(hmacMD5Bytes));
		
	}

}
```
![](./assets/JAVA/37.jpg)
![](./assets/JAVA/38.jpg)

##  Java实现对称加密
- 软件、硬件
- 加密密钥=解密密钥
- 初等、DES(3DES)、AES、PBE、IDEA

![](./assets/JAVA/19.jpg)
```java
import java.security.Key;
import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;

import org.apache.commons.codec.binary.Hex;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class DESTest 
{
	public static final String src = "des test";
	public static void main(String[] args) 
	{
		jdkDES();
		bcDES();

	}
	
	// 用jdk实现:
	public static void jdkDES()
	{
		try 
		{
			// 生成KEY
			KeyGenerator keyGenerator = KeyGenerator.getInstance("DES");			
			keyGenerator.init(56);
			// 产生密钥
			SecretKey secretKey = keyGenerator.generateKey();
			// 获取密钥
			byte[] bytesKey = secretKey.getEncoded();
			
			
			// KEY转换
			DESKeySpec desKeySpec = new DESKeySpec(bytesKey);
			SecretKeyFactory factory = SecretKeyFactory.getInstance("DES");
			Key convertSecretKey = factory.generateSecret(desKeySpec);
			
			
			// 加密
			Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, convertSecretKey);
			byte[] result = cipher.doFinal(src.getBytes());
			System.out.println("jdk des encrypt:" + Hex.encodeHexString(result));
			
			// 解密
			cipher.init(Cipher.DECRYPT_MODE, convertSecretKey);
			result = cipher.doFinal(result);
			System.out.println("jdk des decrypt:" + new String(result));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	// 用bouncy castle实现:
	public static void bcDES()
	{
		try 
		{
			Security.addProvider(new BouncyCastleProvider());
			
			// 生成KEY
			KeyGenerator keyGenerator = KeyGenerator.getInstance("DES", "BC");
			keyGenerator.getProvider();
			keyGenerator.init(56);
			// 产生密钥
			SecretKey secretKey = keyGenerator.generateKey();
			// 获取密钥
			byte[] bytesKey = secretKey.getEncoded();
			
			
			// KEY转换
			DESKeySpec desKeySpec = new DESKeySpec(bytesKey);
			SecretKeyFactory factory = SecretKeyFactory.getInstance("DES");
			Key convertSecretKey = factory.generateSecret(desKeySpec);
			
			
			// 加密
			Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, convertSecretKey);
			byte[] result = cipher.doFinal(src.getBytes());
			System.out.println("bc des encrypt:" + Hex.encodeHexString(result));
			
			// 解密
			cipher.init(Cipher.DECRYPT_MODE, convertSecretKey);
			result = cipher.doFinal(result);
			System.out.println("bc des decrypt:" + new String(result));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
```
![](./assets/JAVA/20.jpg)
![](./assets/JAVA/21.jpg)
![](./assets/JAVA/22.jpg)
![](./assets/JAVA/23.jpg)
![](./assets/JAVA/24.jpg)
![](./assets/JAVA/25.jpg)
```java
import java.security.Key;
import java.security.SecureRandom;
import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import javax.crypto.spec.DESedeKeySpec;

import org.apache.commons.codec.binary.Hex;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class DES3Test 
{
	public static final String src = "3des test";
	public static void main(String[] args) 
	{
		jdk3DES();
		bc3DES();

	}
	
	// 用jdk实现:
	public static void jdk3DES()
	{
		try 
		{
			// 生成KEY
			KeyGenerator keyGenerator = KeyGenerator.getInstance("DESede");	
			// 必须长度是：112或168
//			keyGenerator.init(168);
			keyGenerator.init(new SecureRandom());
			// 产生密钥
			SecretKey secretKey = keyGenerator.generateKey();
			// 获取密钥
			byte[] bytesKey = secretKey.getEncoded();
			
			
			// KEY转换
			DESedeKeySpec desKeySpec = new DESedeKeySpec(bytesKey);
			SecretKeyFactory factory = SecretKeyFactory.getInstance("DESede");
			Key convertSecretKey = factory.generateSecret(desKeySpec);
			
			
			// 加密
			Cipher cipher = Cipher.getInstance("DESede/ECB/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, convertSecretKey);
			byte[] result = cipher.doFinal(src.getBytes());
			System.out.println("jdk 3des encrypt:" + Hex.encodeHexString(result));
			
			// 解密
			cipher.init(Cipher.DECRYPT_MODE, convertSecretKey);
			result = cipher.doFinal(result);
			System.out.println("jdk 3des decrypt:" + new String(result));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	// 用bouncy castle实现:
	public static void bc3DES()
	{
		try 
		{
			Security.addProvider(new BouncyCastleProvider());
			
			// 生成KEY
			KeyGenerator keyGenerator = KeyGenerator.getInstance("DESede", "BC");
			keyGenerator.getProvider();
			keyGenerator.init(168);
			// 产生密钥
			SecretKey secretKey = keyGenerator.generateKey();
			// 获取密钥
			byte[] bytesKey = secretKey.getEncoded();
			
			
			// KEY转换
			DESedeKeySpec desKeySpec = new DESedeKeySpec(bytesKey);
			SecretKeyFactory factory = SecretKeyFactory.getInstance("DESede");
			Key convertSecretKey = factory.generateSecret(desKeySpec);
			
			
			// 加密
			Cipher cipher = Cipher.getInstance("DESede/ECB/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, convertSecretKey);
			byte[] result = cipher.doFinal(src.getBytes());
			System.out.println("bc 3des encrypt:" + Hex.encodeHexString(result));
			
			// 解密
			cipher.init(Cipher.DECRYPT_MODE, convertSecretKey);
			result = cipher.doFinal(result);
			System.out.println("bc 3des decrypt:" + new String(result));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
```

- AES是目前使用最多的对称加密算法
- AES的优势之一是至今尚未被破解
- AES通常用于移动通信系统加密以及基于SSH协议的软件(SSH Client、secureCRT)

![](./assets/JAVA/26.jpg)
```java
import java.security.Key;
import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Hex;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class AESTest 
{
	public static final String src = "aes test";
	public static void main(String[] args) 
	{
		jdkAES();
		bcAES();

	}
	
	// 用jdk实现:
	public static void jdkAES()
	{
		try 
		{
			// 生成KEY
			KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");			
			keyGenerator.init(128);
			// 产生密钥
			SecretKey secretKey = keyGenerator.generateKey();
			// 获取密钥
			byte[] keyBytes = secretKey.getEncoded();
			
			
			// KEY转换
			Key key = new SecretKeySpec(keyBytes, "AES");
			
			
			// 加密
			Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, key);
			byte[] result = cipher.doFinal(src.getBytes());
			System.out.println("jdk aes encrypt:" + Hex.encodeHexString(result));
			
			// 解密
			cipher.init(Cipher.DECRYPT_MODE, key);
			result = cipher.doFinal(result);
			System.out.println("jdk aes decrypt:" + new String(result));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	// 用bouncy castle实现:
	public static void bcAES()
	{
		try 
		{
			Security.addProvider(new BouncyCastleProvider());
			
			// 生成KEY
			KeyGenerator keyGenerator = KeyGenerator.getInstance("AES", "BC");	
			keyGenerator.getProvider();
			keyGenerator.init(128);
			// 产生密钥
			SecretKey secretKey = keyGenerator.generateKey();
			// 获取密钥
			byte[] keyBytes = secretKey.getEncoded();
			
			
			// KEY转换
			Key key = new SecretKeySpec(keyBytes, "AES");
			
			
			// 加密
			Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, key);
			byte[] result = cipher.doFinal(src.getBytes());
			System.out.println("bc aes encrypt:" + Hex.encodeHexString(result));
			
			// 解密
			cipher.init(Cipher.DECRYPT_MODE, key);
			result = cipher.doFinal(result);
			System.out.println("bc aes decrypt:" + new String(result));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
```
![](./assets/JAVA/27.jpg)

![](./assets/JAVA/39.jpg)
![](./assets/JAVA/40.jpg)
![](./assets/JAVA/41.jpg)
![](./assets/JAVA/42.jpg)
![](./assets/JAVA/43.jpg)
```java
import java.security.Key;
import java.security.SecureRandom;

import javax.crypto.Cipher;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.PBEParameterSpec;

import org.apache.commons.codec.binary.Hex;

public class PBETest {
	public static final String src = "pbe test";
	public static void main(String[] args) 
	{
		jdkPBE();

	}

	// 用jdk实现:
	public static void jdkPBE()
	{
		try 
		{
			// 初始化盐
			SecureRandom random = new SecureRandom();
			byte[] salt = random.generateSeed(8);
			
			// 口令与密钥
			String password = "timliu";
			PBEKeySpec pbeKeySpec = new PBEKeySpec(password.toCharArray()); 
			SecretKeyFactory factory = SecretKeyFactory.getInstance("PBEWITHMD5andDES");
			Key key = factory.generateSecret(pbeKeySpec);
			
									
			// 加密
			PBEParameterSpec pbeParameterSpac = new PBEParameterSpec(salt, 100);
			Cipher cipher = Cipher.getInstance("PBEWITHMD5andDES");
			cipher.init(Cipher.ENCRYPT_MODE, key, pbeParameterSpac);
			byte[] result = cipher.doFinal(src.getBytes());
			System.out.println("jdk pbe encrypt:" + Hex.encodeHexString(result));
			
			// 解密
			cipher.init(Cipher.DECRYPT_MODE, key, pbeParameterSpac);
			result = cipher.doFinal(result);
			System.out.println("jdk pbe decrypt:" + new String(result));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
```

##  Java实现非对称加密

![](./assets/JAVA/44.jpg)
![](./assets/JAVA/45.jpg)
![](./assets/JAVA/46.jpg)
![](./assets/JAVA/47.jpg)
![](./assets/JAVA/48.jpg)
![](./assets/JAVA/49.jpg)
![](./assets/JAVA/50.jpg)
![](./assets/JAVA/51.jpg)
![](./assets/JAVA/52.jpg)
![](./assets/JAVA/53.jpg)
![](./assets/JAVA/54.jpg)
![](./assets/JAVA/55.jpg)
![](./assets/JAVA/56.jpg)
![](./assets/JAVA/57.jpg)
![](./assets/JAVA/58.jpg)
![](./assets/JAVA/59.jpg)
```java
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.X509EncodedKeySpec;

import javax.crypto.Cipher;
import javax.crypto.KeyAgreement;
import javax.crypto.SecretKey;
import javax.crypto.interfaces.DHPublicKey;
import javax.crypto.spec.DHParameterSpec;

import org.apache.commons.codec.binary.Base64;

import com.sun.org.apache.xalan.internal.utils.Objects;

public class DHTest 
{
	public static final String src = "dh test";

	public static void main(String[] args) 
	{
		jdkDH();

	}
	
	// jdk实现：
	public static void jdkDH()
	{		
		try 
		{
			// 1.初始化发送方密钥
			KeyPairGenerator senderKeyPairGenerator = KeyPairGenerator.getInstance("DH");
			senderKeyPairGenerator.initialize(512);
			KeyPair senderKeyPair = senderKeyPairGenerator.generateKeyPair();
			// 发送方公钥，发送给接收方（网络、文件。。。）
			byte[] senderPublicKeyEnc = senderKeyPair.getPublic().getEncoded();
			
			// 2.初始化接收方密钥
			KeyFactory receiverKeyFactory = KeyFactory.getInstance("DH");
			X509EncodedKeySpec x509EncodedKeySpec = new X509EncodedKeySpec(senderPublicKeyEnc);
			PublicKey receiverPublicKey = receiverKeyFactory.generatePublic(x509EncodedKeySpec);
			DHParameterSpec dhParameterSpec = ((DHPublicKey) receiverPublicKey).getParams();
			KeyPairGenerator receiverKeyPairGenerator = KeyPairGenerator.getInstance("DH");
			receiverKeyPairGenerator.initialize(dhParameterSpec);
			KeyPair receiverKeypair = receiverKeyPairGenerator.generateKeyPair();
			PrivateKey receiverPrivateKey = receiverKeypair.getPrivate();
			byte[] receiverPublicKeyEnc = receiverKeypair.getPublic().getEncoded();
			
			// 3.密钥构建
			KeyAgreement receiverKeyAgreement = KeyAgreement.getInstance("DH");
			receiverKeyAgreement.init(receiverPrivateKey);
			receiverKeyAgreement.doPhase(receiverPublicKey, true);
			SecretKey receiverDesKey = receiverKeyAgreement.generateSecret("DES");
			
			KeyFactory senderKeyFactory = KeyFactory.getInstance("DH");
			x509EncodedKeySpec = new X509EncodedKeySpec(receiverPublicKeyEnc);
			PublicKey senderPublicKey = senderKeyFactory.generatePublic(x509EncodedKeySpec);
			KeyAgreement senderKeyAgreement = KeyAgreement.getInstance("DH");
			senderKeyAgreement.init(senderKeyPair.getPrivate());
			senderKeyAgreement.doPhase(senderPublicKey, true);
			SecretKey senderDesKey = senderKeyAgreement.generateSecret("DES");
			if(Objects.equals(receiverDesKey, senderDesKey))
			{
				System.out.println("双方密钥相同。");
			}
			
			// 4.加密
			Cipher cipher = Cipher.getInstance("DES");
			cipher.init(Cipher.ENCRYPT_MODE, senderDesKey);
			byte[] result = cipher.doFinal(src.getBytes());
			System.out.println("bc dh encrypt:" + Base64.encodeBase64String(result));
			
			// 5.解密
			cipher.init(Cipher.DECRYPT_MODE, receiverDesKey);
			result = cipher.doFinal(result);
			System.out.println("bc dh decrypt:" + new String(result));
			
		} catch (Exception e) {			
			e.printStackTrace();
		}
	}

}
```
![](./assets/JAVA/60.jpg)
![](./assets/JAVA/61.jpg)
![](./assets/JAVA/62.jpg)
```java
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;

import javax.crypto.Cipher;
import javax.crypto.KeyAgreement;
import javax.crypto.SecretKey;
import javax.crypto.interfaces.DHPublicKey;
import javax.crypto.spec.DHParameterSpec;

import org.apache.commons.codec.binary.Base64;

import com.sun.org.apache.xalan.internal.utils.Objects;

public class RSATest 
{
	public static final String src = "rsa test";

	public static void main(String[] args) 
	{
		jdkRSA();

	}
	
	// jdk实现：
	public static void jdkRSA()
	{		
		try 
		{
			// 1.初始化发送方密钥
			KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
			keyPairGenerator.initialize(512);
			KeyPair keyPair = keyPairGenerator.generateKeyPair();
			RSAPublicKey rsaPublicKey = (RSAPublicKey) keyPair.getPublic();
			RSAPrivateKey rsaPrivateKey = (RSAPrivateKey) keyPair.getPrivate();
			System.out.println("Public Key:" + Base64.encodeBase64String(rsaPublicKey.getEncoded()));
			System.out.println("Private Key:" + Base64.encodeBase64String(rsaPrivateKey.getEncoded()));
			
			// 2.私钥加密、公钥解密 ---- 加密
			PKCS8EncodedKeySpec pkcs8EncodedKeySpec = new PKCS8EncodedKeySpec(rsaPrivateKey.getEncoded());
			KeyFactory keyFactory = KeyFactory.getInstance("RSA");
			PrivateKey privateKey = keyFactory.generatePrivate(pkcs8EncodedKeySpec);
			Cipher cipher = Cipher.getInstance("RSA");
			cipher.init(Cipher.ENCRYPT_MODE, privateKey);
			byte[] result = cipher.doFinal(src.getBytes());
			System.out.println("私钥加密、公钥解密 ---- 加密:" + Base64.encodeBase64String(result));
			
			// 3.私钥加密、公钥解密 ---- 解密
			X509EncodedKeySpec x509EncodedKeySpec = new X509EncodedKeySpec(rsaPublicKey.getEncoded());
			keyFactory = KeyFactory.getInstance("RSA");
			PublicKey publicKey = keyFactory.generatePublic(x509EncodedKeySpec);
			cipher = Cipher.getInstance("RSA");
			cipher.init(Cipher.DECRYPT_MODE, publicKey);
			result = cipher.doFinal(result);
			System.out.println("私钥加密、公钥解密 ---- 解密:" + new String(result));
			
			
			
			// 4.公钥加密、私钥解密 ---- 加密
			X509EncodedKeySpec x509EncodedKeySpec2 = new X509EncodedKeySpec(rsaPublicKey.getEncoded());
			KeyFactory keyFactory2 = KeyFactory.getInstance("RSA");
			PublicKey publicKey2 = keyFactory2.generatePublic(x509EncodedKeySpec2);
			Cipher cipher2 = Cipher.getInstance("RSA");
			cipher2.init(Cipher.ENCRYPT_MODE, publicKey2);
			byte[] result2 = cipher2.doFinal(src.getBytes());
			System.out.println("公钥加密、私钥解密 ---- 加密:" + Base64.encodeBase64String(result2));
			
			// 5.私钥解密、公钥加密 ---- 解密
			PKCS8EncodedKeySpec pkcs8EncodedKeySpec5 = new PKCS8EncodedKeySpec(rsaPrivateKey.getEncoded());
			KeyFactory keyFactory5 = KeyFactory.getInstance("RSA");
			PrivateKey privateKey5 = keyFactory5.generatePrivate(pkcs8EncodedKeySpec5);
			Cipher cipher5 = Cipher.getInstance("RSA");
			cipher5.init(Cipher.DECRYPT_MODE, privateKey5);
			byte[] result5 = cipher5.doFinal(result2);
			System.out.println("公钥加密、私钥解密 ---- 解密:" + new String(result5));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
```
![](./assets/JAVA/62.jpg)
![](./assets/JAVA/63.jpg)
![](./assets/JAVA/64.jpg)
![](./assets/JAVA/65.jpg)
![](./assets/JAVA/66.jpg)
![](./assets/JAVA/67.jpg)
参考：  
[https://github.com/Tim9Liu9/java_security](https://github.com/Tim9Liu9/java_security)  